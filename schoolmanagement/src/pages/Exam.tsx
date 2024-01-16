import "./css/home.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import urlcalling from "../components/urlcalling";
import Images from "../images/examschedule.png";
import { useDispatch, useSelector } from "react-redux";
import { setexamData } from "../redux/redux";
import { RootState } from "../redux/store";

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
  const examdata = useSelector((values: RootState) => values.exam.examData);
  console.log(examdata);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    examName: "",
    selectedClassId: "",
    selectedSubject: "",
    selectedRoom: "",
    academic: "",
    selectedExam: "",
    startDates: "",
    endDates: "",
  });
  const handleChange = async (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const BASE = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    const url = `${BASE}/exam/classid`;
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
        dispatch(
          setexamData({
            academicYearResult,
            classIdResult,
            examTypeResult,
            roomIdResult,
            subjectIdResult,
          })
        );
      });
  }, []);

  const handlesubmits = async () => {
    const BASE = process.env.REACT_APP_BASE_URL;
    urlcalling(`${BASE}/exam/shedule`, "POST", formData).then((data) => {
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
        <div className="body">
          <div className="examdiv">
            <label id="lab">Exam name:</label>
            <input
              className="class11"
              type="text"
              id="examname"
              name="examName"
              onChange={handleChange}
            />
          </div>
          <div className="examdiv">
            <label>Select Class:</label>
            <select
              name="selectedClassId"
              id="class1"
              className="class11"
              onChange={handleChange}
            >
              <option value="undefined">select...</option>
              {examdata?.classIdResult.map((value: ClassItem) => (
                <option key={value.id} value={value.id}>
                  {value.grade}
                </option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>Select Subject:</label>
            <select
              name="selectedSubject"
              id="subject"
              className="class11"
              onChange={handleChange}
            >
              <option value="undefined">select...</option>
              {examdata?.subjectIdResult.map((value: SubjectItem) => (
                <option key={value.id} value={value.id}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>select Room:</label>
            <select
              name="selectedRoom"
              id="room"
              className="class11"
              onChange={handleChange}
            >
              <option value="undefined">select...</option>
              {examdata?.roomIdResult.map((value: RoomItem) => (
                <option key={value.id} value={value.id}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>Academic Year:</label>
            <select
              name="academic"
              id="year"
              className="class11"
              onChange={handleChange}
            >
              <option value="undefined">select...</option>
              {examdata?.academicYearResult.map((value: AcademicYearItem) => (
                <option key={value.academic_year} value={value.academic_year}>
                  {value.academic_year}
                </option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>Exam Type:</label>
            <select
              id="type"
              name="selectedExam"
              className="class11"
              onChange={handleChange}
            >
              <option value="undefined">select...</option>
              {examdata?.examTypeResult.map((value: ExamTypeItem) => (
                <option key={value.id} value={value.id}>
                  {value.type}
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
              name="startDates"
              onChange={handleChange}
            />
          </div>
          <div className="examdiv">
            <label>End date:</label>
            <input
              className="class11"
              type="datetime-local"
              id="endDates"
              name="endDates"
              onChange={handleChange}
            />
          </div>
          <div className="examdiv">
            <button className="btn class11" id="button" onClick={handlesubmits}>
              Submit
            </button>
          </div>
        </div>
        <div className="sideimg">
          <h1>Exam Schedule</h1>
          <img src={Images} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Exam;
