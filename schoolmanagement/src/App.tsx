import { Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Home from "./pages/Home";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
