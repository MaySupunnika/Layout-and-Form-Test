import TitleInput from "./InputForm/TitleInput";
import "../style/Form.scss";
import FnameInput from "./InputForm/FnameInput";
import LnameInput from "./InputForm/LnameInput";
import DOBInput from "./InputForm/DOBInput";
import NationalityInput from "./InputForm/NationalityInput";
import IDInput from "./InputForm/IDInput";
import GenderInput from "./InputForm/GenderInput";
import PhoneNumInput from "./InputForm/PhoneNumInput";
import PassportInput from "./InputForm/PassportInput";
import SalaryInput from "./InputForm/SalaryInput";
import { Form, Space, Button } from "antd";
import { useTranslation } from "react-i18next";

export default function FormInformation() {
  const { t } = useTranslation();
  return (
    <>
      <div className="form-container">
        <div className="form-item1">
          <TitleInput />
          <FnameInput />
          <LnameInput />
        </div>
        <div>
          <DOBInput />
          <NationalityInput />
        </div>
        <IDInput />
        <GenderInput />
        <PhoneNumInput />
        <PassportInput />
        <div>
          <SalaryInput />
          <Form.Item style={{ marginLeft: "8rem" }}>
            <Space>
              <Button htmlType="button" style={{ marginRight: "3rem" }}>
                {t("clearForm")}
              </Button>
              <Button htmlType="submit">{t("sendForm")}</Button>
            </Space>
          </Form.Item>
        </div>
      </div>
    </>
  );
}
