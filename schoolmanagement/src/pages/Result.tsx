import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import urlcalling from "../components/urlcalling";
import { setexamData } from "../redux/redux";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

type Marks = {
  result: Results[];
};
type Results = {
  name: string;
  total_mark: number;
  mark_obtained: number;
  type: string;
};
function Result() {
  const [selectedExam, setSelectedExam] = useState<number | string>();
  const examdata = useSelector((values: RootState) => values.exam.examData);
  const dispatch = useDispatch();
  const [data, setData] = useState<Marks>();
  function handlechange() {
    if (!selectedExam) {
      alert("please select a exam");
    } else {
      urlcalling(`/student/examResult?examType=${selectedExam}`, "GET").then(
        (data) => {
          const { result } = data;
          setData({ result });
          console.log(result);
        }
      );
    }
  }
  useEffect(() => {
    urlcalling(`/exam/classid`, "GET").then((data) => {
      const { examTypeResult } = data.message;
      dispatch(
        setexamData({
          examTypeResult,
        })
      );
    });
  }, []);
  return (
    <>
      <Navbar />
      <h1>Result</h1>
      <div className="examtable">
        <div className="timetable">
          <label>Exam Type:</label>
          <select
            id="type"
            name="selectedExam"
            className="class11"
            onChange={(e) => {
              setSelectedExam(e.target.value);
            }}
          >
            <option>select...</option>
            {examdata?.examTypeResult.map((value: any) => (
              <option key={value.id} value={value.id}>
                {value.type}
              </option>
            ))}
          </select>
        </div>
        <div className="timetable">
          <button onClick={handlechange}>Show</button>
        </div>
      </div>
      <table>
        <tr>
          <th>subject</th>
          <th>Total Mark</th>
          <th>Mark Obtained</th>
        </tr>
        {data?.result.map((option: any) => (
          <tr key={option.mark_obtained}>
            <td>{option.name}</td>
            <td>{option.total_mark}</td>
            <td>{option.mark_obtained}</td>
          </tr>
        ))}
      </table>
      <Footer />
    </>
  );
}
export default Result;
