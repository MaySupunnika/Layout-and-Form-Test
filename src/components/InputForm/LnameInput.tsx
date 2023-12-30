import { useTranslation } from "react-i18next";
import { Form, Input } from "antd";

export default function LnameInput() {
  const { t } = useTranslation();
  return (
    <>
      <Form.Item
        name="lName"
        label={t("lName")}
        rules={[{ required: true }]}
        style={{ fontWeight: "600" }}
      >
        <Input style={{ width: "15rem" }} />
      </Form.Item>
    </>
  );
}
