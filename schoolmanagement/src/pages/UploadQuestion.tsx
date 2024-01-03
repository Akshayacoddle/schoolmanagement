import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
interface Question {
  question: File | null;
}
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
    const url = "http://localhost:5001/exam/examname";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        const { examResult } = data.message;
        console.log(examResult);
        setExam({
          examResult,
        });
      });
  }, []);

  const examValues = exam.examResult.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const submitImage = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("question", question!);
    formData.append("exam", exams!);
    await axios
      .post("http://localhost:5001/exam/questions", formData, {
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
    console.log(e.target.files[0]);
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
                  {examValues.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <input type="file" onChange={onInputChange} />
              <button>upload</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default UploadQuestion;
