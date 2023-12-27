import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ulrcalling from "../components/urlcalling";
type User = {
  name: string;
  date: string;
  gender: string;
  email: string;
  password: string;
  address: string;
  join: string;
  status: string;
};
function Signup() {
  const [data, setData] = useState<User>({
    name: "",
    date: "",
    gender: "",
    email: "",
    password: "",
    address: "",
    join: "",
    status: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const navigate = useNavigate();
  const BASE = process.env.REACT_APP_BASE_URL;
  const HandleSignup = async () => {
    ulrcalling(`${BASE}/teacher/register`, "POST", data).then((data) => {
      console.log(!data.success);
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
      <div className="img">
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
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <input type="date" name="date" onChange={handleChange} />
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <input
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <input
                type="date"
                name="join"
                placeholder="Date of Join"
                onChange={handleChange}
              />
              <input
                type="text"
                name="status"
                placeholder="status"
                onChange={handleChange}
              />
            </div>
            <button onClick={HandleSignup} value="signup">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
