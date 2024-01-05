import { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import ulrcalling from "../components/urlcalling";
type Users = {
  email: string;
  password: string;
};
function LogIn() {
  const [data, setData] = useState<Users>({
    email: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const slogin = () => {
    localStorage.setItem("user", "student");
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
        const cleanedToken = token.replace(/['"]+/g, "");
        console.log(cleanedToken);

        localStorage.setItem("jwttoken", cleanedToken);
        localStorage.setItem("islogged", "true");
        navigate("/");
      } else {
        alert("invalid username or password");
      }
    });
  };

  return (
    <div className="img">
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
          <div className="linkselect">
            <a href="/signup" className="sigup">
              Signup
            </a>
            <a href="/login" className="sigup" onClick={slogin}>
              student login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
