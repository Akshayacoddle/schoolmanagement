import Images from "../images/question.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import urlcalling from "../components/urlcalling";

type Exam = {
  examResult: exam[];
};
type exam = {
  name: string;
  id: number;
};
function UploadQuestion() {
  const [question, setQuestion] = useState<File | null>(null);
  const [exam, setExam] = useState<Exam>({
    examResult: [],
  });
  const [exams, setExams] = useState<string>();
  useEffect(() => {
    urlcalling(`/exam/examname`, "GET").then((data) => {
      const { examResult } = data.message;
      console.log(examResult);
      setExam({
        examResult,
      });
    });
  }, []);
  const submitImage = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("question", question!);
    formData.append("exam", exams!);
    const BASE = process.env.REACT_APP_BASE_URL;
    await axios
      .post(`${BASE}/exam/questions`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("jwttoken"),
        },
      })
      .then((data) => {
        console.log(data.data.success);
        if (data.data.success === true) {
          alert("question paper uploaded successfully");
        } else {
          alert("Some issue has occured");
        }
      })
      .catch((error) =>
        alert("only image files with 2mb or pdf file with 5mb are are allowed")
      );
  };
  const onInputChange = (e: any) => {
    setQuestion(e.target.files[0]);
  };
  return (
    <>
      <Navbar />
      <div className="containerexam hallticket">
        <div className="body">
          <h1>Upload Question paper</h1>
          <div>
            <form onSubmit={submitImage}>
              <div className="examdiv">
                <label>Select Exam:</label>
                <select
                  id="class1"
                  className="class11"
                  onChange={(e) => setExams(e.target.value)}
                >
                  <option value="">Select...</option>
                  {exam?.examResult.map((option: exam) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <input type="file" onChange={onInputChange} />
              <button>upload</button>
            </form>
          </div>
        </div>
        <div className="sideimg">
          <img src={Images} alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default UploadQuestion;
