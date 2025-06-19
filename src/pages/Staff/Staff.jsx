import React, { useState, useEffect } from "react";
import Masseur from "../../pacages/Masseur/Masseur";
import AddMasseur from "../../pacages/AddMasseur/AddMasseur";
import "./Staff.scss";
import { Outlet } from "react-router-dom";

// Початкові дані (можна змінити)
const initialMasseurs = [
  {
    id: 1,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Іван Петренко",
    description: "Досвідчений масажист з 10-річним стажем. Спеціалізується на класичному, спортивному та релаксуючому масажі. Завжди знаходить індивідуальний підхід до кожного клієнта.",
  },
  {
    id: 2,
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Олена Ковальчук",
    description: "Майстриня релаксуючого та тайського масажу. Працює з дітьми та дорослими, допомагає відновити сили та покращити самопочуття.",
  },
];

export default function Staff() {
  const [masseurs, setMasseurs] = useState(() => {
    const saved = localStorage.getItem("masseurs");
    return saved ? JSON.parse(saved) : initialMasseurs;
  });
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    localStorage.setItem("masseurs", JSON.stringify(masseurs));
  }, [masseurs]);

  const handleAddMasseur = (data) => {
    const newMasseur = {
      id: Date.now(),
      photo: data.photo
        ? URL.createObjectURL(data.photo)
        : "https://via.placeholder.com/110",
      name: `${data.firstName} ${data.lastName}`,
      description: data.description,
    };
    setMasseurs((prev) => [...prev, newMasseur]);
    setShowAdd(false);
  };

  return (
    <div className="staff-list">
      {masseurs.map((masseur, idx) => (
        <Masseur
          key={masseur.id}
          id={masseur.id}
          photo={masseur.photo}
          name={masseur.name}
          description={masseur.description}
          reverse={idx % 2 === 1}
        />
      ))}

      <button
        className="add-masseur-fab"
        onClick={() => setShowAdd(true)}
        aria-label="Додати масажиста"
      >
        <span>+</span>
      </button>

      {showAdd && (
        <AddMasseur
          onAdd={handleAddMasseur}
          onCancel={() => setShowAdd(false)}
        />
      )}
      <Outlet />
    </div>
  );
}