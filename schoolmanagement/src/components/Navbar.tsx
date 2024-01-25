import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import withConditionalNavItems from "./withNavbar";
import profile from "../images/profile.png";
import Profile from "./Profile";
interface NavbarProps {
  navItems: { [key: string]: string };
}

function Navbar({ navItems }: Readonly<NavbarProps>) {
  const navigate = useNavigate();

  const [visibleDetails, setVisibleDetails] = useState(false);
  function handleImg() {
    setVisibleDetails(!visibleDetails);
    return <h1>user image </h1>;
  }
  const handleLogout = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <ul>
          <div className="left-item">
            <li>
              <a href="/"> Home</a>
            </li>
            {Object.entries(navItems).map(([label, path]) => (
              <li key={label}>
                <a href={path}>{label}</a>
              </li>
            ))}
          </div>
          <div className="right-item">
            <li>
              <div className="pro-img">
                <img
                  src={profile}
                  alt=""
                  className="img-profile"
                  onClick={handleImg}
                  onKeyDown={handleImg}
                />
              </div>
            </li>
            <li>
              <button className="logoutbtn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </div>
        </ul>
        {visibleDetails ? <Profile /> : ""}
      </div>
    </nav>
  );
}

export default withConditionalNavItems(Navbar);
