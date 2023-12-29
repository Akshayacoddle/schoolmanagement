import React, { useState, useEffect } from "react";
import axios from "axios";
function UploadQuestion() {
  const url = "http://localhost:5001/exam/classid";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    console.log(axios.get(url).then((res) => setData(res.data)));

    return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>using Axios Library to Fetch Data</h1>
      <center>
        return (
        <div
          style={{
            width: "15em",
            backgroundColor: "#CD8FFD",
            padding: 2,
            borderRadius: 10,
            marginBlock: 10,
          }}
        >
          <p style={{ fontSize: 20, color: "white" }}></p>
        </div>
        );
      </center>
    </div>
  );
}
export default UploadQuestion;
