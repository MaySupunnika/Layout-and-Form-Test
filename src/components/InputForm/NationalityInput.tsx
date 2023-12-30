import { Form, Select } from "antd";
import { useTranslation } from "react-i18next";

export default function NationalityInput() {
  const { t } = useTranslation();
  const { Option } = Select;
  return (
    <>
      <Form.Item
        name="nationality"
        label={t("nationality")}
        rules={[{ required: true }]}
        style={{ fontWeight: "600" }}
      >
        <Select placeholder={t("nationFormat")} style={{ width: "15rem" }}>
          <Option value="thai">{t("thai")}</Option>
          <Option value="australian">{t("australian")}</Option>
          <Option value="english">{t("english")}</Option>
        </Select>
      </Form.Item>
    </>
  );
}
