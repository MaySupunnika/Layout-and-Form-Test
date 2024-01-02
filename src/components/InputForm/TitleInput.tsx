import { Form, Select } from "antd";
import { useTranslation } from "react-i18next";

export default function TitleInput() {
  const { t } = useTranslation();
  const { Option } = Select;
  return (
    <>
      <Form.Item
        name="title"
        label={t("title")}
        rules={[{ required: true }]}
        style={{ fontWeight: "600" }}
      >
        <Select placeholder={t("title")} style={{ width: "5rem" }}>
          <Option value="mr">{t("mr")}</Option>
          <Option value="miss">{t("miss")}</Option>
          <Option value="mrs">{t("mrs")}</Option>
        </Select>
      </Form.Item>
    </>
  );
}
