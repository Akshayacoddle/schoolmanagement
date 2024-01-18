import { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import ulrcalling from "../components/urlcalling";
type Users = {
  email: string;
  password: string;
};
function AdminLogIn() {
  let url = "";
  let loginbtn = "";
  let role = "";
  let header = "";
  const [data, setData] = useState<Users>({
    email: "",
    password: "",
  });
  const path = window.location.pathname;
  if (path === "/login") {
    loginbtn = "Admin login";
    header = "LogIn";
  } else {
    loginbtn = "Student login";
    header = "Admin LogIn";
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const navigate = useNavigate();
  useEffect(() => {
    console.log(window.location.pathname);
    if (localStorage.getItem("jwttoken")) navigate("/");
  }, [navigate]);
  const Handlelink = () => {
    path === "/login" && navigate("/admin");
    path === "/admin" && navigate("/login");
  };
  const Handlesingup = () => {
    navigate("/signup");
  };
  const HandleLogin = (e: unknown) => {
    if (path === "/login") {
      url = "/student/login";
      role = "user";
      header = "LogIn";
    } else {
      url = "/teacher/login";
      role = "admin";
      header = "Admin LogIn";
    }
    ulrcalling(url, "POST", data).then((data) => {
      console.log(data);

      if (data.success === true) {
        const token = JSON.stringify(data.jwtToken);
        const cleanedToken = token.replace(/['"]+/g, "");
        localStorage.setItem("jwttoken", cleanedToken);
        localStorage.setItem("islogged", "true");
        localStorage.setItem("role", `${role}`);
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
          <div className="text">{header}</div>
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
          <button onClick={HandleLogin} className="button">
            login
          </button>
          <div className="linkselect">
            <button onClick={Handlesingup} className="sigup">
              Signup
            </button>
            <button onClick={Handlelink} className="sigup">
              {loginbtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminLogIn;
