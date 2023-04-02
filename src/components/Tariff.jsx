import React from "react";
import "./Tariff.css";

function Tariff({ name, price, speed, description, index, isBig, isSelected, onClick}) {
    let nameClass = "tariff-name";
    let priceClass = "tariff-price";
    let tariffClass = "tariff";

    switch (index) {
        case 0:
            nameClass += " dark-blue";
            priceClass += " blue";
            break;
        case 1:
            nameClass += " dark-green";
            priceClass += " green";
            break;
        case 2:
            nameClass += " dark-red";
            priceClass += " red";
            break;
        case 3:
            nameClass += " black";
            priceClass += " gray";
            break;
        default:
            break;

    }

    if (isBig) {
        tariffClass += " big-tariff";
    }

    if (isSelected) {
      tariffClass += "selected";
      nameClass += "selected";
      priceClass += "selected";
    }
    return (
      <div className={tariffClass} onClick={onClick}>
      <div className={nameClass}>{name}</div>
      <div className={priceClass}>
      <p>руб</p>
      <div className="price-value">{price}</div>
      <p>/мес</p>
      </div>
      <div className="tariff-speed">до {speed} Мбит/сек </div>
      <div className="tariff-description">{description}</div>
      </div>
      );
      }

export default Tariff;
