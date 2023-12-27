import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const HandleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    if (!localStorage.getItem("jwttoken")) navigate("/login");
  }, [navigate]);

  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul>
            <li>
              <a href="/exam">Exam Shedule</a>
            </li>
            <li>
              <a href="/login">Upload Question paper</a>
            </li>
            <li>
              <a href="/login">Generate Hall Ticket</a>
            </li>
            <li>
              <a onClick={HandleClick} href="/login">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="home_div">
        <div className="overlap"></div>
        <div className="head">
          <h1>We Ensure better education for a better world</h1>
          <p>
            EDUCTION IS OUR PASSSPORT TO THE FUTURE,FOR TOMORROW BELONGS TO THE
            PEOPLE WHO PREPARE FOR IT TODAY
          </p>
        </div>
      </div>
      <div className="second">
        <div className="second-division">
          <div></div>
          <h2>Certified Teachers</h2>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic
          </p>
        </div>
        <div className="second-division">
          <div></div>
          <h2>Special Education</h2>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic
          </p>
        </div>
        <div className="second-division">
          <div></div>
          <h2>Book & Library</h2>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic
          </p>
        </div>
        <div className="second-division">
          <div></div>
          <h2>Certification</h2>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
