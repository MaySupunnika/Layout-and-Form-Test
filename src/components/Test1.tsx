import "../style/Test1.scss";
import SwitchLang from "./SwitchLang";
import { useTranslation } from "react-i18next";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Test1() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const shapeItems: string[] = [
    "square",
    "circle",
    "oval",
    "trapezoid",
    "rectangle",
    "parallelogram",
  ];

  const [items, setItems] = useState(shapeItems);

  const clickPrev = () => {
    const changeItem: string[] = [...items];
    changeItem.push(changeItem.shift()!);
    setItems(changeItem);
  };

  const clickNext = () => {
    const changeItem: string[] = [...items];
    changeItem.unshift(changeItem.pop()!);
    setItems(changeItem);
  };

  const clickReverse = () => {
    const changeItem = [...items.slice(3, 6), ...items.slice(0, 3)];
    setItems(changeItem);
  };

  const randomItems = () => {
    const randomItem = [...items];
    for (let i = randomItem.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomItem[i], randomItem[j]] = [randomItem[j], randomItem[i]];
    }
    setItems(randomItem);
  };

  return (
    <>
      <div className="test1-container">
        <div className="switch-lang-box">
          <SwitchLang />
        </div>
        <div className="topic-box">
          <h2>{t("Topic1")}</h2>
          <button className="home-button" onClick={() => navigate("/")}>
            {t("Home")}
          </button>
        </div>
        <div className="button-shape-container">
          <button onClick={clickPrev}>
            <div className="left-shape"></div>
            <p>{t("Move Shape")}</p>
          </button>
          <button className="reverse-button" onClick={clickReverse}>
            <div className="reverse-col">
              <div className="reverse-item-up"></div>
              <div className="reverse-item-down"></div>
            </div>
            <p>{t("Move Position")}</p>
          </button>
          <button onClick={clickNext}>
            <div className="right-shape"></div>
            <p>{t("Move Shape")}</p>
          </button>
        </div>
        <div className="underline"></div>
        <div className="shape-container">
          {items.map((item) => (
            <Card key={item} className="card-shape" onClick={randomItems}>
              <div className={item}></div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
