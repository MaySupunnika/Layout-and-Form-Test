import { useTranslation } from "react-i18next";
import { Form, InputNumber, Space } from "antd";
import "../../style/IdInput.scss";

export default function IDInput() {
  const { t } = useTranslation();
  return (
    <>
      <Form.Item name="idCard" label={t("id")} style={{ fontWeight: "600" }}>
        <Space.Compact
          style={{
            width: "35rem",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Form.Item name="id1" noStyle>
            <InputNumber
              id="input1"
              onKeyUp={(e) => {
                const idInput1 = (e.target as HTMLInputElement).value;
                if (idInput1.length === 1) {
                  document.getElementById("input2")?.focus();
                }
              }}
              controls={false}
              maxLength={1}
              style={{ width: "4rem", borderRadius: "0.4rem" }}
            />
          </Form.Item>
          <span className="dashed"> - </span>
          <Form.Item name="id2" noStyle>
            <InputNumber
              id="input2"
              onKeyUp={(e) => {
                const idInput2 = (e.target as HTMLInputElement).value;
                if (idInput2.length === 4) {
                  document.getElementById("input3")?.focus();
                }
              }}
              controls={false}
              maxLength={4}
              style={{ width: "6rem", borderRadius: "0.4rem" }}
            />
          </Form.Item>
          <span className="dashed"> - </span>
          <Form.Item name="id3" noStyle>
            <InputNumber
              id="input3"
              onKeyUp={(e) => {
                const idInput3 = (e.target as HTMLInputElement).value;
                if (idInput3.length === 5) {
                  document.getElementById("input4")?.focus();
                }
              }}
              controls={false}
              maxLength={5}
              style={{ width: "7rem", borderRadius: "0.4rem" }}
            />
          </Form.Item>
          <span className="dashed"> - </span>
          <Form.Item name="id4" noStyle>
            <InputNumber
              id="input4"
              onKeyUp={(e) => {
                const idInput4 = (e.target as HTMLInputElement).value;
                if (idInput4.length === 2) {
                  document.getElementById("input5")?.focus();
                }
              }}
              controls={false}
              maxLength={2}
              style={{ width: "5rem", borderRadius: "0.4rem" }}
            />
          </Form.Item>
          <span className="dashed"> - </span>
          <Form.Item name="id5" noStyle>
            <InputNumber
              id="input5"
              controls={false}
              maxLength={1}
              style={{ width: "4rem", borderRadius: "0.4rem" }}
            />
          </Form.Item>
        </Space.Compact>
      </Form.Item>
    </>
  );
}
