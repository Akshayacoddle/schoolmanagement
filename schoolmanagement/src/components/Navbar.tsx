import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const HandleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/feedback">FeedBack</a>
          </li>
          <li>
            <a href="/">Time Table</a>
          </li>
          <li>
            <a href="/hallticket">HallTicket</a>
          </li>
          <li>
            <a onClick={HandleClick} href="/login">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
