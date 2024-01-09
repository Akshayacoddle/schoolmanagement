import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useSelector, useDispatch } from "react-redux";
import { fetchUserInfo } from "../redux/reduxApi";
import { useEffect, useState } from "react";
import urlcalling from "../components/urlcalling";

type teacher = {
  id: number;
  name: string;
};
type SubjectItem = {
  id: number;
  name: string;
};
type ClassItem = {
  id: number;
  grade: string;
};
function Feedback() {
  const { data } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    classId: "",
    teacher: "",
    subject: "",
    aboutTeacher: "",
    aboutSchool: "",
  });

  useEffect(() => {
    dispatch(fetchUserInfo() as any);
  }, [dispatch]);
  const handleChange = async (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handlesubmits = () => {
    console.log(formData);

    const BASE = process.env.REACT_APP_BASE_URL;
    urlcalling(`${BASE}/student/feedback`, "POST", formData).then((data) => {
      console.log(data);

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
      <div className="containerexam">
        <div className="body">
          <div className="examdiv">
            <label id="lab">Name</label>
            <input
              className="class11"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="examdiv">
            <label id="lab">class</label>
            <select
              name="classId"
              id="class1"
              className="class11"
              onChange={handleChange}
            >
              <option value="undefined">select...</option>
              {data.message?.classIdResult.map((value: ClassItem) => (
                <option key={value.id} value={value.id}>
                  {value.grade}
                </option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>Select Teacher:</label>
            <select
              name="teacher"
              id="class1"
              className="class11"
              onChange={handleChange}
            >
              <option value="undefined">select...</option>
              {data.message?.teacherResult.map((value: teacher) => (
                <option key={value.id} value={value.id}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          <div className="examdiv">
            <label>Subject Taken:</label>
            <select
              name="subject"
              id="subject"
              className="class11"
              onChange={handleChange}
            >
              <option value="undefined">select...</option>
              {data.message?.subjectIdResult.map((value: SubjectItem) => (
                <option key={value.id} value={value.id}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>

          <div className="examdiv">
            <label>About Teacher</label>
            <textarea
              className="class11"
              id="aboutTeacher"
              name="aboutTeacher"
              onChange={handleChange}
            />
          </div>
          <div className="examdiv">
            <label>About school</label>
            <textarea
              className="class11"
              id="aboutSchool"
              name="aboutSchool"
              onChange={handleChange}
            />
          </div>
          <div className="examdiv">
            <button className="btn class11" id="button" onClick={handlesubmits}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Feedback;
