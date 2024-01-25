import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Exam from "./pages/Exam";
import Question from "./pages/UploadQuestion";
import Hallticket from "./pages/Hallticket";
import Feedback from "./pages/Feedback";
import ViewHallticket from "./pages/ViewHallticket";
import TimeTable from "./pages/TimeTable";
import Result from "./pages/Result";
import { AdminElement, UserElement } from "./components/RBAC";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<LogIn />} />
        <Route path="*" element={<div>Page not found !</div>} />
        <Route
          path="/exam"
          element={
            <AdminElement>
              <Exam />
            </AdminElement>
          }
        />
        <Route
          path="/uploadquestion"
          element={
            <AdminElement>
              <Question />
            </AdminElement>
          }
        />
        <Route
          path="/hallticket"
          element={
            <AdminElement>
              <Hallticket />
            </AdminElement>
          }
        />
        <Route
          path="/feedback"
          element={
            <UserElement>
              <Feedback />
            </UserElement>
          }
        />
        <Route
          path="/timetable"
          element={
            <UserElement>
              <TimeTable />
            </UserElement>
          }
        />
        <Route
          path="/view"
          element={
            <UserElement>
              <ViewHallticket />
            </UserElement>
          }
        />
        <Route
          path="/result"
          element={
            <UserElement>
              <Result />
            </UserElement>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
