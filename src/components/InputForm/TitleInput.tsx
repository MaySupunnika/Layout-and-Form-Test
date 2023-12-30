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
          <Option value="male">{t("male")}</Option>
          <Option value="female">{t("female")}</Option>
          <Option value="n/a">{t("n/a")}</Option>
        </Select>
      </Form.Item>
    </>
  );
}
