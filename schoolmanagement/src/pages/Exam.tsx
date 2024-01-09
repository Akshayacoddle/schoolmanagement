import "./css/home.css";
import { useEffect, useState } from "react";
import Navbar from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import urlcalling from "../components/urlcalling";
import Images from "../examschedule.png";

import { useSelector, useDispatch } from "react-redux";
import { fetchUserInfo } from "../redux/reduxApi";
type AcademicYear = {
  academic_year: string;
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
  const { data } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    examName: "",
    selectedClassId: "",
    selectedSubject: "",
    selectedRoom: "",
    academic: "",
    selectedExam: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    dispatch(fetchUserInfo() as any);
  }, [dispatch]);
  const handleChange = async (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handlesubmits = async () => {
    const BASE = process.env.REACT_APP_BASE_URL;
    urlcalling(`${BASE}/exam/shedule`, "POST", formData).then((data) => {
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
        <div className="body">
          <div className="examdiv">
            <label id="lab">Exam name:</label>
            <input
              className="class11"
              type="text"
              id="examname"
              name="fname"
              onChange={handleChange}
            />
          </div>
          <div className="examdiv">
            <label>Select Class:</label>
            <select id="class1" className="class11" onChange={handleChange}>
              <option value="undefined">select...</option>
              {data.message?.classIdResult.map((value: ClassItem) => (
                <option key={value.id} value={value.id}>
                  {value.grade}
                </option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>Select Subject:</label>
            <select id="subject" className="class11" onChange={handleChange}>
              <option value="undefined">select...</option>
              {data.message?.subjectIdResult.map((value: SubjectItem) => (
                <option key={value.id} value={value.id}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>select Room:</label>
            <select id="room" className="class11" onChange={handleChange}>
              <option value="undefined">select...</option>
              {data.message?.roomIdResult.map((value: RoomItem) => (
                <option key={value.id} value={value.id}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>Academic Year:</label>
            <select id="year" className="class11" onChange={handleChange}>
              <option value="undefined">select...</option>
              {data.message?.academicYearResult.map((value: AcademicYear) => (
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
              name="type"
              className="class11"
              onChange={handleChange}
            >
              <option value="undefined">select...</option>
              {data.message?.examTypeResult.map((value: ExamTypeItem) => (
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
              name="startdate"
              onChange={handleChange}
            />
          </div>
          <div className="examdiv">
            <label>End date:</label>
            <input
              className="class11"
              type="datetime-local"
              id="lastdate"
              name="lastdate"
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
