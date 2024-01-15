import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Learn from "../images/learn.webp";
import Lead from "../images/lead.jpg";
import Success from "../images/success.webp";
import Security from "../images/sa.png";
import Certified from "../images/certified.png";
import Class from "../images/class.jpg";
import Regular from "../images/regular.png";
import Creative from "../images/creative.jpg";
import Sports from "../images/sports.jpg";

import Kindness from "../images/kindness.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavbarAdmin from "../components/NavbarAdmin";
function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("jwttoken")) navigate("/login");
  }, [navigate]);

  return (
    <>
      {localStorage.getItem("role") === "user" && <Navbar />}
      {localStorage.getItem("role") === "admin" && <NavbarAdmin />}
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
      <Footer />
    </>
  );
}

export default Home;
