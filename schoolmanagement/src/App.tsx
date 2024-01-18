import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Exam from "./pages/Exam";
import Question from "./pages/UploadQuestion";
import Hallticket from "./pages/Hallticket";
import Feedback from "./pages/Feedback";
import ViewHallticket from "./pages/ViewHallticket";

const CURRENT_USER_TYPE = localStorage.getItem("role");

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/view" element={<ViewHallticket />} />
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
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={<LogIn />} />
        <Route path="*" element={<div>Page not found !</div>} />
      </Routes>
    </div>
  );
}
interface Element {
  children: React.ReactNode;
}

function AdminElement({ children }: Readonly<Element>) {
  if (CURRENT_USER_TYPE === "admin") {
    return <>{children}</>;
  } else {
    return (
      <div>
        <h1>You don't have permission to access</h1>
      </div>
    );
  }
}
export default App;
