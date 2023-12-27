import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ulrcalling from "../components/urlcalling";
import { ChangeEvent } from "react";
type Users = {
  email: string;
  password: string;
};
function LogIn() {
  const [data, setData] = useState<Users>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("jwttoken")) navigate("/");
  }, [navigate]);
  const BASE = process.env.REACT_APP_BASE_URL;
  const HandleLogin = (e: unknown) => {
    ulrcalling(`${BASE}/teacher/login`, "POST", data).then((data) => {
      console.log(data);

      if (data.success === true) {
        const token = JSON.stringify(data.jwtToken);
        localStorage.setItem("jwttoken", token);
        localStorage.setItem("islogged", "true");
        navigate("/");
      } else {
        alert("invalid username or password");
      }
    });
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
      <div className="img">
        <div className="container">
          <img src="school.png" alt="" />
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
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <button onClick={HandleLogin}>login</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default LogIn;
