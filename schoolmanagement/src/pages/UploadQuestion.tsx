import Images from "../images/question.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Exam = {
  examResult: exam[];
};
type exam = {
  name: string;
  id: number;
};
function UploadQuestion() {
  const [question, setQuestion] = useState<File | null>(null);
  const [exams, setExams] = useState<Exam>();
  const BASE = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    const url = `${BASE}/exam/examname`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        const { examResult } = data.message;
        setExams({
          examResult,
        });
      });
  }, []);
  const submitImage = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("question", question!);
    //formData.append("exam", exams!);
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
      });
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
                  //onChange={(e) => setExams(e.target.value)}
                >
                  <option value="">Select...</option>
                  {exams?.examResult.map((option: exam) => (
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
