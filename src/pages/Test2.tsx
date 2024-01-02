import "../style/Test2.scss";
import SwitchLang from "../components/SwitchLang";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import FormInformation from "../components/Form";
import TableForm from "../components/Table";
import { DataType } from "../controls/Submissions";
import { v4 as uuid4 } from "uuid";
import { useState, useEffect } from "react";
import { Form, Input, Modal, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  addSubmission,
  deleteOneSubmission,
  deleteManySubmission,
  editSubmission,
} from "../controls/Submissions";
import { setEditing, resetEditing } from "../controls/editing";
import { RootState } from "../store";

export default function Test2() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const submissions = useSelector((state: RootState) => state.submissions);
  const editingRecord = useSelector((state: RootState) => state.editing);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("submissions", JSON.stringify(submissions));
  });

  const onFinish = (value: DataType) => {
    const submission = {
      ...value,
      key: uuid4() as React.Key,
    };
    dispatch(addSubmission(submission));
    form.resetFields();
  };

  const cancelModal = () => {
    setShowModal(false);
    dispatch(resetEditing());
  };

  const onEdit = (record: DataType) => {
    setShowModal(true);
    submissions.map((submission) => {
      if (submission.key === record.key) {
        dispatch(setEditing(record));
      }
    });
  };

  const onDeleteItem = (record: DataType) => {
    Modal.confirm({
      title: t("deleteRecord"),
      content: (
        <Typography>
          {t("name")}:{record.fName} {record.lName}
          <br />
          {t("gender")}: {record.gender}
          <br />
          {t("phone")}: {record.phone}
          <br />
          {t("nationality")}: {record.nationality}
          <br />
          <p style={{ fontWeight: 600 }}>{t("deleteConfirm")}</p>
        </Typography>
      ),
      okText: t("yes"),
      okType: "danger",
      cancelText: t("no"),
      onOk: () => {
        dispatch(deleteOneSubmission(record));
      },
    });
  };

  const onDelete = (
    records: React.Key[],
    setSelectAll: (isSelect: boolean) => void
  ) => {
    records.length &&
      Modal.confirm({
        title: t("deleteRecord"),
        content: (
          <Typography>
            <p style={{ fontWeight: 600 }}>
              {t("deleteAllConfirm")} {records.length} {t("list")} ?
            </p>
          </Typography>
        ),
        okText: t("yes"),
        okType: "danger",
        cancelText: t("no"),
        onOk: () => {
          dispatch(deleteManySubmission(records));
          setSelectAll(false);
        },
      });
  };
  return (
    <>
      <div className="test2-container">
        <div className="switch-lang-box">
          <SwitchLang />
        </div>
        <div className="topic-box">
          <h2>{t("Topic2")}</h2>
          <button className="home-button" onClick={() => navigate("/")}>
            {t("Home")}
          </button>
        </div>
        <div className="form-box">
          <Form form={form} name="register" onFinish={onFinish}>
            <FormInformation />
          </Form>
        </div>
        <div className="table-box">
          <TableForm
            onDeleteItem={onDeleteItem}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
        <Modal
          title={t("editList")}
          open={showModal}
          okText={t("save")}
          onCancel={cancelModal}
          cancelText={t("cancel")}
          onOk={() => {
            if (editingRecord) {
              dispatch(editSubmission(editingRecord));
              cancelModal();
            }
          }}
        >
          <Form.Item label={t("fName")}>
            <Input
              value={
                editingRecord && "fName" in editingRecord
                  ? (editingRecord as any).fName
                  : undefined
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  setEditing({
                    ...(editingRecord || {}),
                    fName: e.target.value,
                  })
                )
              }
            />
          </Form.Item>
          <Form.Item label={t("lName")}>
            <Input
              value={
                editingRecord && "lName" in editingRecord
                  ? (editingRecord as any).lName
                  : undefined
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  setEditing({
                    ...(editingRecord || {}),
                    lName: e.target.value,
                  })
                )
              }
            />
          </Form.Item>
          <Form.Item label={t("gender")}>
            <Input
              value={
                editingRecord && "gender" in editingRecord
                  ? (editingRecord as any).gender
                  : undefined
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  setEditing({
                    ...(editingRecord || {}),
                    gender: e.target.value,
                  })
                )
              }
            />
          </Form.Item>
          <Form.Item label={t("phone")}>
            <Input
              max={10}
              value={
                editingRecord && "phone" in editingRecord
                  ? (editingRecord as any).phone
                  : undefined
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  setEditing({
                    ...(editingRecord || {}),
                    phone: e.target.value,
                  })
                );
              }}
              maxLength={9}
            />
          </Form.Item>
          <Form.Item label={t("nationality")}>
            <Input
              value={
                editingRecord && "nationality" in editingRecord
                  ? (editingRecord as any).nationality
                  : undefined
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  setEditing({
                    ...(editingRecord || {}),
                    nationality: e.target.value,
                  })
                )
              }
            />
          </Form.Item>
        </Modal>
      </div>
    </>
  );
}
