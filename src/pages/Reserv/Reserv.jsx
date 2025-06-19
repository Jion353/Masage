import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./Reserv.scss";

// Початкові дані для масажистів
const initialMasseurs = [
  {
    id: 1,
    name: "Іван Петренко",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Досвідчений масажист з 10-річним стажем. Спеціалізується на класичному, спортивному та релаксуючому масажі.",
  },
  {
    id: 2,
    name: "Олена Ковальчук",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Майстриня релаксуючого та тайського масажу.",
  },
];

export default function Reserv() {
  const [masseurs, setMasseurs] = useState(() => {
    const saved = localStorage.getItem("masseurs");
    return saved ? JSON.parse(saved) : initialMasseurs;
  });

  const [reservations, setReservations] = useState(() => {
    const saved = localStorage.getItem("reservations");
    return saved ? JSON.parse(saved) : [];
  });

  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [masseurId, setMasseurId] = useState("");
  const [foundReservations, setFoundReservations] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    localStorage.setItem("masseurs", JSON.stringify(masseurs));
  }, [masseurs]);

  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);

  const handleFind = (e) => {
    e.preventDefault();
    if (clientName.trim()) {
      const found = reservations.filter((r) =>
        r.clientName.toLowerCase().includes(clientName.trim().toLowerCase())
      );
      setFoundReservations(found);
      setShowResults(true);
    } else {
      setFoundReservations([]);
      setShowResults(false);
    }
  };

  const handleReserve = (e) => {
    e.preventDefault();
    const newReservation = {
      id: Date.now(),
      clientName,
      date,
      time,
      masseurId: Number(masseurId),
    };
    setReservations((prev) => [...prev, newReservation]);
    alert(
      `Запис створено!\nІм'я: ${clientName}\nДата: ${date}\nЧас: ${time}\nМайстер: ${
        masseurs.find((m) => m.id === Number(masseurId))?.name || ""
      }`
    );
  };

  useEffect(() => {
    if (!clientName.trim()) {
      setShowResults(false);
      setFoundReservations([]);
    }
  }, [clientName]);

  return (
    <div className="reservation-page">
      <form className="reservation-form">
        <h2>Запис на масаж</h2>
        <label>
          Ім'я клієнта:
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Введіть ім'я"
            required
          />
        </label>
        <label>
          Дата та час:
          <div className="reservation-datetime">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
        </label>
        <label>
          Оберіть майстра:
          <select
            value={masseurId}
            onChange={(e) => setMasseurId(e.target.value)}
            required
          >
            <option value="">-- Оберіть майстра --</option>
            {masseurs.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
        </label>
        <div className="reservation-buttons">
          <button type="button" onClick={handleFind}>
            Знайти
          </button>
          <button type="submit" onClick={handleReserve}>
            Записатись
          </button>
        </div>
      </form>

      {showResults && (
        <div className="reservation-results">
          {foundReservations.length > 0 ? (
            <>
              <h3>Знайдені записи:</h3>
              <ul>
                {foundReservations.map((r) => (
                  <li key={r.id}>
                    <b>Ім'я:</b> {r.clientName} | <b>Дата:</b> {r.date} | <b>Час:</b> {r.time} | <b>Майстер:</b> {masseurs.find(m => m.id === r.masseurId)?.name}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <h3>Знайдених записів немає</h3>
          )}
        </div>
      )}

      <Outlet />
    </div>
  );
} 