const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

// Отримати всі дані з файлу
async function getAllData() {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

// Додати масажиста
async function addMasseur(newMasseur) {
  const data = await getAllData();
  data.masseurs.push(newMasseur);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
  return newMasseur;
}

// Додати резервацію
async function addReservation(newReservation) {
  const data = await getAllData();
  data.reservations.push(newReservation);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
  return newReservation;
}

// Отримати всіх масажистів
async function getMasseurs() {
  const data = await getAllData();
  return data.masseurs;
}

// Отримати всі резервації
async function getReservations() {
  const data = await getAllData();
  return data.reservations;
}

// Експорт функцій
module.exports = {
  getAllData,
  getMasseurs,
  getReservations,
  addMasseur,
  addReservation,
};