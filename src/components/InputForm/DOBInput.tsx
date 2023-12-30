import { useTranslation } from "react-i18next";
import { DatePicker, Form } from "antd";

export default function DOBInput() {
  const { t } = useTranslation();
  return (
    <>
      <Form.Item
        name="dob"
        label={t("dob")}
        rules={[{ required: true }]}
        style={{ fontWeight: "600" }}
      >
        <DatePicker
          placeholder={t("dobFormat")}
          style={{ marginRight: "2rem" }}
        />
      </Form.Item>
    </>
  );
}
