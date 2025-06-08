import React from "react";
import "./styles.css";

function NativeCity() {
  return (
    <div className="card city-card">
      <h2>Моє рідне місто</h2>
      <p><strong>Назва міста:</strong> Рівне</p>
      <p><strong>Країна:</strong> Україна</p>
      <p><strong>Рік заснування:</strong> хз</p>
      <div className="images">
        <img src="https://24.rv.ua/wp-content/uploads/2023/08/78989-0986.jpg" alt="якась фотка1" />
        <img src="https://www.journeys6senses.com/wp-content/uploads/2023/01/rivne15.jpg" alt="якась фотка 2" />
      </div>
    </div>
  );
}

export default NativeCity;
