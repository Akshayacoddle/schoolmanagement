import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Learn from "../learn.webp";
import Lead from "../lead.jpg";
import Success from "../success.webp";
import Security from "../sa.png";
import Certified from "../certified.png";
import Class from "../class.jpg";
import Regular from "../regular.png";
import Creative from "../creative.jpg";
import Sports from "../sports.jpg";
import Facebook from "../facebook.jpg";
import Instagram from "../instagram.jpg";
import Twiter from "../twitter.jpeg";
import Kindness from "../kindness.jpg";

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
      <div className="third">
        <div className="thirdhead">
          <h2>What we Offer</h2>
          <p>
            we believe in fostering not only intellectual growth but also
            character development. Our dedicated faculty, enriched curriculum,
            and emphasis on extracurricular activities create a holistic
            learning experience.
          </p>
        </div>
        <div className="content">
          <div className="thirdcontent">
            <div className="thirdimg">
              <img src={Security} alt="" />
            </div>
            <div className="define">
              <h3>Safety First</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="thirdcontent">
            <div className="thirdimg">
              <img src={Regular} alt="" />
            </div>
            <div className="define">
              <h3>Regular Classes</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="thirdcontent">
            <div className="thirdimg">
              <img src={Certified} alt="" />
            </div>
            <div className="define">
              <h3>Certified Teachers</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>

          <div className="thirdcontent">
            <div className="thirdimg">
              <img src={Class} alt="" />
            </div>
            <div className="define">
              <h3>Sufficient Classrooms</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="thirdcontent">
            <div className="thirdimg">
              <img src={Creative} alt="" />
            </div>
            <div className="define">
              <h3>Creative Lessons</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
          <div className="thirdcontent">
            <div className="thirdimg">
              <img src={Sports} alt="" />
            </div>
            <div className="define">
              <h3>Sports Facilities</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="forth">
        <div className="forthdiv">
          <img src={Learn} alt="" />
          <h3>LEARN</h3>
        </div>
        <div className="forthdiv">
          <img src={Lead} alt="" />
          <h3>LEAD</h3>
        </div>
        <div className="forthdiv">
          <img src={Success} alt="" />
          <h3>SUCCESS</h3>
        </div>
        <div className="forthdiv">
          <img src={Kindness} alt="" />
          <h3>KINDNESS</h3>
        </div>
      </div>
      <footer>
        <div className="footer">
          <div>
            <h4>The RGMHSS School</h4>
            <p>Academic Schools</p>
            <p>Visitor information</p>
            <p>Contact us</p>
            <p>Emergency contacts</p>
            <p>Public information</p>
          </div>
          <div>
            <h4> Our facilities</h4>
            <p>Libraries</p>
            <p>Conferences</p>
            <p>Computer Lab</p>
            <p>Sport</p>
          </div>
          <div>
            <h4>Connect with us</h4>
            <p>New students</p>
            <p>Alumni</p>
            <p>Blogs</p>
          </div>
          <div>
            <h4>Quick links</h4>
            <p>Job opportunities</p>
            <p>Intranet</p>
            <p>Media centre</p>
            <p>People</p>
          </div>
          <div>
            <div className="icons">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twiter} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
