import { useTranslation } from "react-i18next";
import { Form, Input } from "antd";

export default function FnameInput() {
  const { t } = useTranslation();
  return (
    <>
      <Form.Item
        name="fName"
        label={t("fName")}
        rules={[{ required: true }]}
        style={{ fontWeight: "600" }}
      >
        <Input style={{ width: "15rem" }} />
      </Form.Item>
    </>
  );
}
