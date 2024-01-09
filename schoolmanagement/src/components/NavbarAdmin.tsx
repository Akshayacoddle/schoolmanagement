import { useNavigate } from "react-router-dom";
function NavbarAdmin() {
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
            <a href="/exam">Exam Shedule</a>
          </li>
          <li>
            <a href="/uploadquestion">Upload Question paper</a>
          </li>
          <li>
            <a href="/hallticket">Generate Hall Ticket</a>
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
export default NavbarAdmin;
