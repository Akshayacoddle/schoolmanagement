import { useEffect, useState } from "react";
import Navbar from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import urlcalling from "../components/urlcalling";
import admincard from "../images/admincard.png";
import { useSelector, useDispatch } from "react-redux";
import { setexamData } from "../redux/redux";
import { RootState } from "../redux/store";

type ClassItem = {
  id: number;
  grade: string;
};
type ExamTypeItem = {
  id: number;
  type: string;
};
function Hallticket() {
  const examdata = useSelector((exam: RootState) => exam.exam.examData);
  console.log(examdata);

  const dispatch = useDispatch();
  const [selectedClassId, setSelectedClassId] = useState<number | string>();
  const [selectedExamType, setSelectedExamType] = useState<number | string>();

  const BASE = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    const url = `${BASE}/exam/classid`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { classIdResult, examTypeResult } = data.message;
        dispatch(
          setexamData({
            classIdResult,
            examTypeResult,
          })
        );
      });
  }, []);
  const handlesubmit = async () => {
    const requestData = {
      classes: selectedClassId,
      examType: selectedExamType,
    };
    urlcalling(`${BASE}/exam/hallTicket`, "POST", requestData).then((data) => {
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
      <div className="containerexam hallticket">
        <div className="body">
          <h1>Hall Ticket</h1>
          <div className="examdiv">
            <label>Select Class:</label>
            <select
              id="class1"
              className="class11"
              onChange={(e) => setSelectedClassId(e.target.value)}
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
            <label>Exam Type:</label>
            <select
              id="type"
              className="class11"
              onChange={(e) => setSelectedExamType(e.target.value)}
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
            <button className="btn" id="button" onClick={handlesubmit}>
              Submit
            </button>
          </div>
        </div>
        <div className="sideimg">
          <img src={admincard} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Hallticket;
