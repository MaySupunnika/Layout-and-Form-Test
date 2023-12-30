import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Form, Radio } from "antd";
import { useTranslation } from "react-i18next";

export default function GenderInput() {
  const { t } = useTranslation();
  const [value, setValue] = useState<string>("male");

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <Form.Item
        // name="gender"
        label={t("gender")}
        rules={[{ required: true }]}
        style={{ fontWeight: "600" }}
      >
        <Radio.Group onChange={onChange} value={value}>
          <Radio value="male">{t("male")}</Radio>
          <Radio value="female">{t("female")}</Radio>
          <Radio value="n/a">{t("n/a")}</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
}
