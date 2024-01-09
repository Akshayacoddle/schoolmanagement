import Facebook from "../facebook.jpg";
import Instagram from "../instagram.jpg";
import Twiter from "../twitter.jpeg";
function Footer() {
  return (
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
  );
}
export default Footer;
