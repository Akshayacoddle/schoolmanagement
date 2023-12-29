import "./css/home.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
type ExamData = {
  academicYearResult: AcademicYearItem[];
  classIdResult: ClassItem[];
  examTypeResult: ExamTypeItem[];
  roomIdResult: RoomItem[];
  subjectIdResult: SubjectItem[];
};
type AcademicYearItem = {
  academic_year: number;
};
type ClassItem = {
  id: number;
  grade: string;
};

type ExamTypeItem = {
  id: number;
  type: string;
};

type RoomItem = {
  id: number;
  name: string;
};

type SubjectItem = {
  name: string;
};

function Exam() {
  const [examData, setExamData] = useState<ExamData>({
    academicYearResult: [],
    classIdResult: [],
    examTypeResult: [],
    roomIdResult: [],
    subjectIdResult: [],
  });

  useEffect(() => {
    const url = "http://localhost:5001/exam/classid";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);

        const {
          academicYearResult,
          classIdResult,
          examTypeResult,
          roomIdResult,
          subjectIdResult,
        } = data.message;

        setExamData({
          academicYearResult,
          classIdResult,
          examTypeResult,
          roomIdResult,
          subjectIdResult,
        });
      });
  }, []);
  const academicYearValues = examData.academicYearResult.map(
    (item) => item.academic_year
  );
  const classIdValues = examData.classIdResult.map((item) => item.grade);
  const examTypeValues = examData.examTypeResult.map((item) => item.type);
  const roomIdValues = examData.roomIdResult.map((item) => item.name);
  const subjectIdValues = examData.subjectIdResult.map((item) => item.name);
  console.log(examData.academicYearResult);

  return (
    <>
      <Navbar />
      <div className="containerexam">
        <div className="head">
          <h1>Exam Schedule</h1>
        </div>
        <div className="body">
          <div className="examdiv">
            <label id="lab">Exam name:</label>
            <input className="class11" type="text" id="examname" name="fname" />
          </div>
          <div className="examdiv">
            <label>Select Class:</label>
            <select id="class1" className="class11">
              {classIdValues.map((value, i) => (
                <option value={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>Select Subject:</label>
            <select id="subject" className="class11">
              {subjectIdValues.map((value, i) => (
                <option value={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>select Room:</label>
            <select id="room" className="class11">
              {roomIdValues.map((value, i) => (
                <option value={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>Academic Year:</label>
            <select id="year" className="class11">
              {academicYearValues.map((value, i) => (
                <option value={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>Exam Type:</label>
            <select id="type" name="type" className="class11">
              {examTypeValues.map((value, i) => (
                <option value={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>Start date:</label>
            <input
              className="class11"
              type="datetime-local"
              id="startdate"
              name="startdate"
            />
          </div>
          <div className="examdiv">
            <label>End date:</label>
            <input
              className="class11"
              type="datetime-local"
              id="lastdate"
              name="lastdate"
            />
          </div>
          <div className="examdiv">
            <button className="btn class11" id="button">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Exam;
