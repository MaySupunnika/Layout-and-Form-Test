import { useTranslation } from "react-i18next";
import { Form, InputNumber, Space, Select } from "antd";

export default function PhoneNumInput() {
  const { t } = useTranslation();
  const { Option } = Select;
  return (
    <>
      <Form.Item
        name="phone"
        label={t("phone")}
        style={{ fontWeight: "600" }}
        rules={[{ required: true }]}
      >
        <Space.Compact>
          <Form.Item name="selector" noStyle>
            <Select
              style={{
                width: "6rem",
                borderRadius: "0.4rem",
                marginRight: "1rem",
              }}
            >
              <Option value="0">+66</Option>
            </Select>
          </Form.Item>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "medium",
            }}
          >
            -
          </span>
          <Form.Item name="phoneNumber" noStyle>
            <InputNumber
              id="phone"
              controls={false}
              maxLength={9}
              style={{
                width: "15rem",
                borderRadius: "0.4rem",
                marginLeft: "1rem",
              }}
            />
          </Form.Item>
        </Space.Compact>
      </Form.Item>
    </>
  );
}
