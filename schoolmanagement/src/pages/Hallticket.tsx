import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import urlcalling from "../components/urlcalling";

type ExamData = {
  classIdResult: ClassItem[];
  examTypeResult: ExamTypeItem[];
};
type ClassItem = {
  id: number;
  grade: string;
};

type ExamTypeItem = {
  id: number;
  type: string;
};

function Hallticket() {
  const [examData, setExamData] = useState<ExamData>({
    classIdResult: [],
    examTypeResult: [],
  });

  const [selectedClassId, setSelectedClassId] = useState<number | string>();
  const [selectedExamType, setSelectedExamType] = useState<number | string>();

  useEffect(() => {
    const url = "http://localhost:5001/exam/classid";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);

        const { classIdResult, examTypeResult } = data.message;

        setExamData({
          classIdResult,
          examTypeResult,
        });
      });
  }, []);

  const classIdValues = examData.classIdResult.map((item) => ({
    value: item.id,
    label: item.grade,
  }));

  const examTypeValues = examData.examTypeResult.map((item) => ({
    value: item.id,
    label: item.type,
  }));

  const handlesubmit = async () => {
    const requestData = {
      classes: selectedClassId,
      examType: selectedExamType,
    };
    const BASE = process.env.REACT_APP_BASE_URL;
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
              defaultValue={selectedClassId}
            >
              {classIdValues.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
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
              {examTypeValues.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
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
      </div>
      <Footer />
    </>
  );
}

export default Hallticket;
