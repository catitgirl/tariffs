import React from "react";
import ".//App.css";
import Tariff from "./components/Tariff.jsx";


function TariffList() {
  const tariffs = [
    {
      name: "Безлимитный 300",
      price: 300,
      speed: 10,
      description: "Объем включенного трафика не ограничен",
    },
    {
      name: "Безлимитный 450",
      price: 450,
      speed: 100,
      description: "Объем включенного трафика не ограничен",
    },
    {
      name: "Безлимитный 550",
      price: 550,
      speed: 200,
      description: "Объем включенного трафика не ограничен",
    },
    {
      name: "Безлимитный 1000",
      price: 1000,
      speed: 200,
      description: "Объем включенного трафика не ограничен",
    },
  ];

  return (
    <div className="tariff-list">
      {tariffs.map((tariff, index) => (
        <Tariff
          key={index}
          name={tariff.name}
          price={tariff.price}
          speed={tariff.speed}
          description={tariff.description}
          index={index}
          isBig={index ===2}
        />
      ))}
    </div>
  );
}


export default TariffList;
