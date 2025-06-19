import React, { useState, useEffect } from "react";
import "./Home.scss";
import { Outlet } from "react-router-dom";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "300px",
  width: "500px",
};
const slideImages = [
  {
    url: "https://i.pinimg.com/736x/3f/2b/ca/3f2bcac04e5cf9da459b01a25b402f08.jpg",
  },
  {
    url: "https://i.pinimg.com/736x/94/0b/70/940b70f9d72655a2b423364280c183da.jpg",
  },
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slideImages.length);
    }, 5000); // 3 seconds

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="slide-container">
      <div
        style={{
          ...divStyle,
          backgroundImage: `url(${slideImages[index].url})`,
        }}
      >
        {/* Optionally show caption */}
        {slideImages[index].caption && (
          <span>{slideImages[index].caption}</span>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="home">
      <div className="home_section">
        <h2 className="home_section-title">
          Ласкаво просимо до масажного салону!
        </h2>
        <p>
          Масаж — це не просто процедура, а мистецтво відновлення тіла та душі.
          У нашому салоні ви знайдете ідеальне місце для релаксу, відновлення
          енергії та турботи про здоров'я.
        </p>
      </div>

      <div className="home_section">
        <h3 className="home_section-title">Наші послуги</h3>
        <details>
          <summary>Класичний масаж 45-60 хв</summary>
          <p className="home_section-content">
            Під час класичного масажу виконується глибоке розслаблення м’язів та
            покращення циркуляції крові. Процедура включає:
            <ul>
              <li>Легкі погладжування для розігріву шкіри.</li>
              <li>Глибоке розминання м’язів для зняття напруги.</li>
              <li>
                Витискання та розтягування тканин для поліпшення гнучкості.
              </li>
            </ul>
          </p>
        </details>
        <details>
          <summary> Релаксуючий масаж 60-90 хв</summary>
          <p className="home_section-content">
            Цей масаж спрямований на повне розслаблення та відновлення енергії.
            Включає:
            <ul>
              <li>Використання ароматичних олій для зняття стресу.</li>
              <li>Повільні, м’які рухи, що стимулюють нервову систему.</li>
              <li>Масаж голови, шиї та плечей для максимального релаксу.</li>
            </ul>
          </p>
        </details>
        <details>
          <summary> Стоунтерапія 60 хв </summary>
          <p className="home_section-content">
            Теплі вулканічні камені розміщують на ключових точках тіла, щоб
            покращити кровообіг та зняти напругу. Процедура:
            <ul>
              <li>Легкий масаж перед застосуванням каменів.</li>
              <li>Розташування теплих каменів уздовж хребта та на плечах.</li>
              <li>Повільні рухи для рівномірного розподілу тепла.</li>
            </ul>
          </p>
        </details>
        <details>
          <summary> Спортивний масаж 45-75 хв</summary>
          <p className="home_section-content">
            Призначений для активних людей та спортсменів, допомагає швидкому
            відновленню:
            <ul>
              <li>Глибокі натискання для зняття м’язового болю.</li>
              <li>Розтягування для покращення гнучкості.</li>
              <li>
                Використання спеціальних технік для пришвидшення регенерації
                тканин.
              </li>
            </ul>
          </p>
        </details>
        <details>
          <summary> Лімфодренажний масаж 50-70 хв</summary>
          <p className="home_section-content">
            Допомагає усунути набряки та вивести токсини з організму. Процес:
            <ul>
              <li>Легкі, ритмічні рухи для стимуляції лімфотоку.</li>
              <li>Масаж кінцівок для поліпшення циркуляції рідини.</li>
              <li>Завершальні розслаблюючі погладжування.</li>
            </ul>
          </p>
        </details>
        <details>
          <summary> Тайський масаж 60-120 хв</summary>
          <p className="home_section-content">
            Це поєднання глибоких розтяжок, натискання на енергетичні точки та
            пасивної йоги, що допомагає відновити баланс енергії в тілі та
            покращити гнучкість. Включає:
            <ul>
              <li>
                Масажист використовує долоні, лікті та ступні для глибокого
                впливу на м’язи.
              </li>
              <li>Виконуються розтяжки, що покращують рухливість суглобів.</li>
              <li>
                Використовуються дихальні техніки, які допомагають розслабитися.
              </li>
            </ul>
          </p>
        </details>
        <details>
          <summary> Масаж ніг 30-60 хв</summary>
          <p className="home_section-content">
            Це одна з найприємніших і розслаблюючих процедур, яка допомагає
            зняти втому після довгого дня. Масаж ніг покращує кровообіг, знімає
            набряки та сприяє загальному релаксу. Містить:
            <ul>
              <li>
                Починається з теплої розслаблюючої ванночки, яка підготовлює
                шкіру та м’язи.
              </li>
              <li>
                Виконується рефлексотерапія, що стимулює важливі точки стопи.
              </li>
              <li>
                Завершується глибокими розтягуваннями, що знімають напругу.
              </li>
            </ul>
          </p>
        </details>
        <details>
          <summary> Мануальний масаж 45-90 хв</summary>
          <p className="home_section-content">
            Цей масаж ефективний при м’язових затисках, болю в суглобах та
            проблемах з рухливістю. Використовується для терапії спини, шиї та
            суглобів. Містить у собі:
            <ul>
              <li>Виконуються глибокі натискання, що розслаблюють м’язи.</li>
              <li>
                Опрацьовуються тригерні точки, які можуть бути джерелом болю.
              </li>
              <li>
                Використовуються м’які розтягування, що покращують рухливість
                суглобів.
              </li>
            </ul>
          </p>
        </details>
      </div>

      <div className="home_section">
        <h3 className="home_section-title">Чому варто вибрати наш салон?</h3>
        <ol>
          <li>Професійні масажисти з багаторічним досвідом</li>
          <li>Індивідуальний підхід до кожного клієнта</li>
          <li>Атмосфера гармонії, тепла та комфорту</li>
          <li>Натуральні масла та косметика найвищої якості</li>
          <li>Зручне розташування та гнучкий графік запису</li>
        </ol>

        <div className="home_slideShow">
          <Slideshow />
        </div>
      </div>

      <Outlet />
    </div>
  );
}
