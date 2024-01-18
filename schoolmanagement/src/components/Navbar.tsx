import React from "react";
import { useNavigate } from "react-router-dom";
import withConditionalNavItems from "./withNavbar";
interface NavbarProps {
  navItems: { [key: string]: string };
}

function Navbar({ navItems }: Readonly<NavbarProps>) {
  const navigate = useNavigate();
  const handleLogout = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <ul>
          <li>
            <a href="/"> Home</a>
          </li>
          {Object.entries(navItems).map(([label, path]) => (
            <li key={label}>
              <a href={path}>{label}</a>
            </li>
          ))}
          <li>
            <button className="logoutbtn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withConditionalNavItems(Navbar);
