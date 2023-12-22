import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
export default App;
