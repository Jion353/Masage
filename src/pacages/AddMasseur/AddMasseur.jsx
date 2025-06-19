import React, { useState } from "react";
import "./AddMasseur.scss";

export default function AddMasseur({ onAdd, onCancel }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [description, setDescription] = useState("");

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(null);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) return;
    onAdd({
      firstName,
      lastName,
      photo,
      description,
    });
  };

  return (
    <div className="add-masseur-backdrop">
      <div className="add-masseur-modal">
        <h2>Додати масажиста</h2>
        <form onSubmit={handleAdd}>
          <label>
            Ім'я:
            <input
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
              autoFocus
            />
          </label>
          <label>
            Прізвище:
            <input
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </label>
          <label>
            Фото:
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
            {photoPreview && (
              <img
                src={photoPreview}
                alt="Прев'ю"
                className="add-masseur-photo-preview"
              />
            )}
          </label>
          <label>
            Опис:
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={4}
              placeholder="(необов'язково)"
            />
          </label>
          <div className="add-masseur-buttons">
            <button type="submit">Додати</button>
            <button type="button" onClick={onCancel} className="cancel">
              Скасувати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}