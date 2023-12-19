import { useState } from "react";
import { useNavigate } from "react-router-dom";
function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const BASE = process.env.REACT_APP_BASE_URL;
  const HandleLogin = async () => {
    let result = await fetch(`${BASE}/teacher/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let results = await result.json();

    if (results.success === true) {
      const token = JSON.stringify(results.jwtToken);
      localStorage.setItem("jwttoken", token);
      navigate("/");
    } else {
      alert("invalid username or password");
    }
  };
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul>
            <li>
              <a className="active" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup">Signup</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="header">
          <div className="text">LogIn</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input">
            <input
              type="password"
              name="pass"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button onClick={HandleLogin} type="submit">
            login
          </button>
        </div>
      </div>
    </>
  );
}
export default LogIn;
