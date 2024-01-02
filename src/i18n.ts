import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      EN: "EN",
      TH: "TH",
      Test: "Test",
      Home: "HomePage",
      Topic1: "Layout & Style",
      Topic2: "Form & Table",
      "Move Shape": "Move Shape",
      "Move Position": "Move Position",
      title: "Title",
      miss: "Miss",
      mr: "Mr",
      mrs: "Mrs",
      name: "Name",
      fName: "First Name",
      lName: "Last Name",
      dob: "Birth Date",
      dobFormat: "MM/DD/YY",
      nationality: "Nationality",
      nationFormat: "-- Please Selecte --",
      thai: "Thai",
      australian: "Australian",
      english: "English",
      id: "ID",
      gender: "Gender",
      male: "Male",
      female: "Female",
      "n/a": "N/A",
      phone: "Phone Number",
      passport: "Passport",
      salary: "Expected Salary",
      clearForm: "Reset",
      sendForm: "Summit ",
      select: "Select All",
      delete: "Delete",
      edit: "Edit",
      operator: "Operator",
      save: "Save",
      cancel: "Cancel",
      yes: "Yes",
      no: "No",
      list: "List",
      editList: "Edit Information",
      deleteAllConfirm: "Are you sure to delete all ?",
      deleteConfirm: "Are you sure to delete ?",
      deleteRecord: "Delete Information",
    },
  },
  th: {
    translation: {
      EN: "อังกฤษ",
      TH: "ไทย",
      Test: "แบบทดสอบที่",
      Home: "หน้าหลัก",
      Topic1: "การจัดการหน้าเว็บ",
      Topic2: "การจัดการหน้าฟอร์ม",
      "Move Shape": "เลื่อนรูปแบบ",
      "Move Position": "เลื่อนตำแหน่ง",
      title: "คำนำหน้า",
      miss: "นางสาว",
      mr: "นาย",
      mrs: "นาง",
      name: "ชื่อ",
      fName: "ชื่อจริง",
      lName: "นามสกุล",
      dob: "วันเกิด",
      dobFormat: "เดือน/วัน/ปี",
      nationality: "สัญชาติ",
      nationFormat: "-- กรุณาเลือก --",
      thai: "ไทย",
      australian: "ออสเตรเลีย",
      english: "อังกฤษ",
      id: "เลขบัตรประชาชน",
      gender: "เพศ",
      male: "ผู้ชาย",
      female: "ผู้หญิง",
      "n/a": "ไม่ระบุ",
      phone: "หมายเลขโทรศัพท์มือถือ",
      passport: "หนังสือเดินทาง",
      salary: "เงินเดือนที่คาดหวัง",
      clearForm: "ล้างข้อมูล",
      sendForm: "ส่งข้อมูล",
      select: "เลือกทั้งหมด",
      delete: "ลบข้อมูล",
      edit: "แก้ไขข้อมูล",
      operator: "จัดการ",
      save: "บันทึก",
      cancel: "ยกเลิก",
      yes: "ใช่",
      no: "ไม่",
      list: "รายการ",
      editList: "แก้ไขข้อมูล",
      deleteAllConfirm: "คุณต้องการที่จะลบรายการทั้งหมด",
      deleteConfirm: "คุณต้องการลบข้อมูลนี้หรือไม่ ?",
      deleteRecord: "ข้อมูลที่ต้องการลบ",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
