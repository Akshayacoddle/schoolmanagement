import Images from "../question.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { fetchQuestionInfo } from "../redux/reduxApi";

type exam = {
  name: string;
  id: number;
};
function UploadQuestion() {
  const { data } = useSelector((state: any) => state.question);
  console.log(data);

  const dispatch = useDispatch();
  const [question, setQuestion] = useState<File | null>(null);
  const [exams, setExams] = useState<string>();
  useEffect(() => {
    dispatch(fetchQuestionInfo() as any);
  }, [dispatch]);

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
                  {data.message?.examResult.map((option: exam) => (
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
