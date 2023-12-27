import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Exam from "./pages/Exam";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
    </div>
  );
}
export default App;
