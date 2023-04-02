import React, { useState } from "react";
import ".//App.css";
import Tariff from "./components/Tariff.jsx";
import tariffs from "./tariffs.json";


function TariffList() {
  const [selectedTariff, setSelectedTariff] = useState(null);
  
  
  const handleTariffClick = (index) => {
  setSelectedTariff(index);
  };
  
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
  isBig={index === 2}
  isSelected={selectedTariff === index}
  onClick={() => handleTariffClick(index)}
  />
  ))}
  </div>
  );
  }
  
  export default TariffList;
