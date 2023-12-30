import "../style/Test2.scss";
import SwitchLang from "../components/SwitchLang";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import FormInformation from "../components/Form";

export default function Test2() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div className="test2-container">
        <div className="switch-lang-box">
          <SwitchLang />
        </div>
        <div className="topic-box">
          <h2>{t("Topic2")}</h2>
          <button className="home-button" onClick={() => navigate("/")}>
            {t("Home")}
          </button>
        </div>
        <div className="form-box">
          <FormInformation />
        </div>
      </div>
    </>
  );
}
