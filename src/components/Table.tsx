import { ColumnsType } from "antd/es/table";
import { DataType } from "../controls/Submissions";
import { useTranslation } from "react-i18next";
import { Table, Typography, Flex, Button, Space, Checkbox } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";

interface Props {
  onDeleteItem: (record: DataType) => void;
  onEdit: (record: DataType) => void;
  onDelete: (
    record: React.Key[],
    selectAll: (isSelect: boolean) => void
  ) => void;
}

const TableForm: React.FC<Props> = ({ onDelete, onEdit, onDeleteItem }) => {
  const submissions = useSelector((state: RootState) => state.submissions);
  const [selectRow, setSelectRow] = useState<React.Key[]>([]);
  const [checked, setChecked] = useState(false);
  const { t } = useTranslation();
  const columns: ColumnsType<DataType> = [
    {
      key: "name",
      title: t("name"),
      dataIndex: ["fName", "lName"],
      render: (_, { fName, lName }) => (
        <Typography>{`${fName} ${lName}`}</Typography>
      ),
      sorter: (a, b) => (a.fName + a.lName).localeCompare(b.fName + b.lName),
    },
    {
      key: "gender",
      title: t("gender"),
      dataIndex: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      key: "phone",
      title: t("phone"),
      dataIndex: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
      key: "nationality",
      title: t("nationality"),
      dataIndex: "nationality",
      sorter: (a, b) => a.nationality.localeCompare(b.nationality),
    },
    {
      title: t("operator"),
      dataIndex: "operator",
      render: (_, record) => (
        <Flex gap="small" wrap="wrap">
          <Button size="middle" onClick={() => onEdit(record)}>
            {t("edit")}
          </Button>
          <Button size="middle" onClick={() => onDeleteItem(record)}>
            {t("delete")}
          </Button>
        </Flex>
      ),
    },
  ];

  const clickCheck = () => {
    if (checked) {
      setSelectRow([]);
      setChecked(false);
    } else {
      setSelectRow([...submissions.map((record) => record.key)]);
      setChecked(true);
    }
  };

  return (
    <>
      <Space direction="vertical" style={{ columnGap: 10, width: "60rem" }}>
        <Space>
          <Checkbox checked={checked} onChange={clickCheck}>
            {t("select")}
          </Checkbox>
          <Button onClick={() => onDelete(selectRow, setChecked)}>
            {t("delete")}
          </Button>
        </Space>
        <Table
          pagination={{ defaultPageSize: 5, showSizeChanger: false }}
          columns={columns}
          dataSource={submissions}
          rowSelection={{
            type: "checkbox",
            selectedRowKeys: selectRow,
            onChange: (key) => {
              setSelectRow(key);
            },
            onSelectAll: (select) => {
              setChecked(select);
            },
          }}
        />
      </Space>
    </>
  );
};

export default TableForm;
