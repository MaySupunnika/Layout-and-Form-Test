import { useTranslation } from "react-i18next";
import { Form, Input } from "antd";

export default function PassportInput() {
  const { t } = useTranslation();
  return (
    <>
      <Form.Item
        name="passport"
        label={t("passport")}
        style={{ fontWeight: "600" }}
      >
        <Input style={{ width: "17.2rem" }} />
      </Form.Item>
    </>
  );
}
