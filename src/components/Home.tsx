import "../style/Home.scss";
import { useTranslation } from "react-i18next";
import SwitchLang from "./SwitchLang";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="switch-lang-button">
          <SwitchLang />
        </div>

        <div className="item1" onClick={() => navigate("/test1")}>
          <h4>{t("Test")} 1</h4>
          <p>{t("Topic1")}</p>
        </div>
        <div className="item2">
          <h4>{t("Test")} 2</h4>
          <p>{t("Topic2")}</p>
        </div>
      </div>
    </>
  );
}
