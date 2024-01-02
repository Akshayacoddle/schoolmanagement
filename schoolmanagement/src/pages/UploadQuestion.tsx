import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
interface question {
  question: File | null;
}

function UploadQuestion() {
  const [question, setQuestion] = useState<File | null>(null);

  const submitImage = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("question", question!);
    const result = await axios.post(
      "http://localhost:5001/exam/questions",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("jwttoken"),
        },
      }
    );
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
