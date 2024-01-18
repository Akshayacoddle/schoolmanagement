import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import urlcalling from "../components/urlcalling";
import "./css/hallticket.css";
type Result = {
  examSubjectResult: subjects[];
  studentHallticketResult: details[];
};
type subjects = {
  subject: string;
  exam_type_id: number;
  class_id: number;
  start_date: string;
  end_date: string;
};

type details = {
  address: string;
  class_id: number;
  date_of_birth: string;
  exam_seat: string;
  full_name: string;
  grade: string;
  start_date: string;
  type: string;
  class_room: string;
};
function ViewHallticket() {
  const [data, setData] = useState<Result>();
  useEffect(() => {
    urlcalling(`/exam/hallTicketView`, "GET").then((data) => {
      const { examSubjectResult, studentHallticketResult } = data.message;
      setData({ examSubjectResult, studentHallticketResult });
    });
  }, []);
  console.log(data?.examSubjectResult, data?.studentHallticketResult);

  return (
    <>
      <Navbar />
      <div className="halltickets">
        {data?.studentHallticketResult.map((option: details) => (
          <div key={option.type}>
            <h2>
              {option.type} {option.grade}
            </h2>
            <div className="roomseat" key={option.exam_seat}>
              <h3>Seat No:{option.exam_seat}</h3>
              <p>Allocated Room:{option.class_room}</p>
            </div>
            <div className="details" key={option.full_name}>
              <p>Name : {option.full_name}</p>
              <p>Date of birth : {option.date_of_birth.split("T")[0]}</p>
              <p>Address : {option.address}</p>
              <p>class : {option.grade}</p>
            </div>
          </div>
        ))}
        <table>
          <tr>
            <th>subject</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
          {data?.examSubjectResult.map((option: subjects) => (
            <tr key={option.subject}>
              <td>{option.subject}</td>
              <td>{option.start_date}</td>
              <td>{option.end_date}</td>
            </tr>
          ))}
        </table>
      </div>
      <Footer />
    </>
  );
}
export default ViewHallticket;
