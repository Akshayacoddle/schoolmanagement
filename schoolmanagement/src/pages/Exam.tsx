import "./css/home.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import urlcalling from "../components/urlcalling";
type ExamData = {
  academicYearResult: AcademicYearItem[];
  classIdResult: ClassItem[];
  examTypeResult: ExamTypeItem[];
  roomIdResult: RoomItem[];
  subjectIdResult: SubjectItem[];
  examName: string;
  startDate: string;
  endtDate: string;
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
  id: number;
  name: string;
};

function Exam() {
  const [examData, setExamData] = useState<ExamData>({
    academicYearResult: [],
    classIdResult: [],
    examTypeResult: [],
    roomIdResult: [],
    subjectIdResult: [],
    examName: "",
    startDate: "",
    endtDate: "",
  });
  const [academic, setAcademic] = useState<number | string>();
  const [examName, setExamName] = useState<string>();
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<number | string>();
  const [selectedClassId, setSelectedClassId] = useState<number | string>();
  const [selectedExam, setSelectedExam] = useState<number | string>();
  const [selectedRoom, setSelectedRoom] = useState<number | string>();
  const [selectedSubject, setSelectedSubject] = useState<number | string>();
  useEffect(() => {
    const url = "http://localhost:5001/exam/classid";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
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
          examName: "",
          startDate: "",
          endtDate: "",
        });
      });
  }, []);
  const academicYearValues = examData.academicYearResult.map(
    (item) => item.academic_year
  );
  const classIdValues = examData.classIdResult.map((item) => ({
    value: item.grade,
    label: item.id,
  }));
  const examTypeValues = examData.examTypeResult.map((item) => ({
    value: item.type,
    label: item.id,
  }));
  const roomIdValues = examData.roomIdResult.map((item) => ({
    value: item.name,
    label: item.id,
  }));
  const subjectIdValues = examData.subjectIdResult.map((item) => ({
    value: item.name,
    label: item.id,
  }));
  const handlesubmits = async () => {
    const requestDatas = {
      academicYear: academic,
      classes: selectedClassId,
      examType: selectedExam,
      room: selectedRoom,
      subject: selectedSubject,
      startDate: startDate,
      endDate: endDate,
      examName: examName,
    };
    const BASE = process.env.REACT_APP_BASE_URL;
    urlcalling(`${BASE}/exam/shedule`, "POST", requestDatas).then((data) => {
      console.log(data);

      if (!data.success) {
        alert("Some issue occurred");
      } else {
        alert("Success");
      }
    });
  };
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
            <input
              className="class11"
              type="text"
              id="examname"
              name="fname"
              onChange={(e) => setExamName(e.target.value)}
            />
          </div>
          <div className="examdiv">
            <label>Select Class:</label>
            <select
              id="class1"
              className="class11"
              onChange={(e) => setSelectedClassId(e.target.value)}
            >
              <option value="undefined">select...</option>
              {classIdValues.map((value) => (
                <option key={value.label} value={value.label}>
                  {value.value}
                </option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>Select Subject:</label>
            <select
              id="subject"
              className="class11"
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="undefined">select...</option>
              {subjectIdValues.map((value) => (
                <option key={value.label} value={value.label}>
                  {value.value}
                </option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>select Room:</label>
            <select
              id="room"
              className="class11"
              onChange={(e) => setSelectedRoom(e.target.value)}
            >
              <option value="undefined">select...</option>
              {roomIdValues.map((value, i) => (
                <option key={value.label} value={value.label}>
                  {value.value}
                </option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>Academic Year:</label>
            <select
              id="year"
              className="class11"
              onChange={(e) => setAcademic(e.target.value)}
            >
              <option value="undefined">select...</option>
              {academicYearValues.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>Exam Type:</label>
            <select
              id="type"
              name="type"
              className="class11"
              onChange={(e) => setSelectedExam(e.target.value)}
            >
              <option value="undefined">select...</option>
              {examTypeValues.map((value) => (
                <option key={value.label} value={value.label}>
                  {value.value}
                </option>
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
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="examdiv">
            <label>End date:</label>
            <input
              className="class11"
              type="datetime-local"
              id="lastdate"
              name="lastdate"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="examdiv">
            <button className="btn class11" id="button" onClick={handlesubmits}>
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
