import "../style/SwitchLang.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function SwitchLang() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>("en");

  const handlerChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <select onChange={handlerChangeLang} value={language}>
        <option value="en">English</option>
        <option value="th">ภาษาไทย</option>
      </select>
    </>
  );
}
