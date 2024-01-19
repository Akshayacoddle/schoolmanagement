import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import urlcalling from "../components/urlcalling";
import { useDispatch, useSelector } from "react-redux";
import { setexamData } from "../redux/redux";
import { RootState } from "../redux/store";

type ExamTypeItem = {
  id: number;
  type: string;
};
type Exams = {
  examResult: Result[];
};
type Result = {
  class_id: number;
  name: string;
  start_date: string;
  end_date: string;
};
function TimeTable() {
  const [selectedExam, setSelectedExam] = useState<number | string>();
  const examdata = useSelector((values: RootState) => values.exam.examData);
  const dispatch = useDispatch();
  const [data, setData] = useState<Exams>();
  function handlechange() {
    console.log(selectedExam);

    urlcalling(`/exam/viewExam?examType=${selectedExam}`, "GET").then(
      (data) => {
        const { examResult } = data.message;
        setData({ examResult });
        console.log(examResult);
      }
    );
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

      <h2>Time Table</h2>
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
            <option value="undefined">select...</option>
            {examdata?.examTypeResult.map((value: ExamTypeItem) => (
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
          <th>Start Time</th>
          <th>End Time</th>
        </tr>
        {data?.examResult.map((option: any) => (
          <tr key={option.name}>
            <td>{option.name}</td>
            <td>{option.start_date}</td>
            <td>{option.end_date}</td>
          </tr>
        ))}
      </table>

      <Footer />
    </>
  );
}
export default TimeTable;
