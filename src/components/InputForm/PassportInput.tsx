import { useTranslation } from "react-i18next";
import { Form, Input, InputNumber } from "antd";

export default function PassportInput() {
  const { t } = useTranslation();
  return (
    <>
      <Form.Item
        name="passport"
        label={t("passport")}
        style={{ fontWeight: "600" }}
      >
        <InputNumber
          style={{ width: "17.2rem" }}
          maxLength={14}
          controls={false}
        />
      </Form.Item>
    </>
  );
}
