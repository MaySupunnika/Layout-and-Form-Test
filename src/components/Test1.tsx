import "../style/Test1.scss";
import SwitchLang from "./SwitchLang";
import { useTranslation } from "react-i18next";
import { Flex } from "antd";
import { useNavigate } from "react-router-dom";

export default function Test1() {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
        <Flex className="shape-container" gap="1rem" justify="center">
          <button>
            <div className="left-shape"></div>
            <p>{t("Move Shape")}</p>
          </button>
          <button className="reverse-button">
            <div className="reverse-col">
              <div className="reverse-item-up"></div>
              <div className="reverse-item-down"></div>
            </div>
            <p>{t("Move Position")}</p>
          </button>
          <button>
            <div className="right-shape"></div>
            <p>{t("Move Shape")}</p>
          </button>
        </Flex>
        <div className="underline"></div>
      </div>
    </>
  );
}
