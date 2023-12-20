import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ulrcalling from "../components/ulrcalling";
function Signup() {
  const [name, setName] = useState("");
  const [dateOfBirth, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfJoin, setDateofjoin] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const BASE = process.env.REACT_APP_BASE_URL;
  const HandleSignup = async () => {
    ulrcalling(
      `${BASE}/teacher/register`,
      {
        name,
        dateOfBirth,
        gender,
        email,
        password,
        address,
        dateOfJoin,
        status,
      },
      "POST"
    ).then((data) => {
      let results = data;
      console.log(results);
      if (!data.success) {
        alert("already registered");
      } else {
        navigate("/");
      }
    });
  };
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul>
            <li>
              <a href="/login">Login</a>{" "}
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="header">
          <div className="text">SignUp</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="input">
            <input
              type="date"
              name="dateOfBirth"
              placeholder="Date-of-Birth"
              onChange={(e) => setDob(e.target.value)}
              value={dateOfBirth}
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="input">
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
          <div className="input">
            <input
              type="date"
              name="dateOfJoin"
              placeholder="Date of Join"
              onChange={(e) => setDateofjoin(e.target.value)}
              value={dateOfJoin}
            />
            <input
              type="text"
              name="status"
              placeholder="status"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            />
          </div>
          <button type="submit" onClick={HandleSignup}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default Signup;
