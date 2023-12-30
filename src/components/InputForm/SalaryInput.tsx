import { useTranslation } from "react-i18next";
import { Form, Input } from "antd";

export default function SalaryInput() {
  const { t } = useTranslation();
  return (
    <>
      <Form.Item
        name="salary"
        label={t("salary")}
        rules={[{ required: true }]}
        style={{ fontWeight: "600" }}
      >
        <Input style={{ width: "15rem" }} />
      </Form.Item>
    </>
  );
}
