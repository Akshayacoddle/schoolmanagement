import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "./css/hallticket.css";
function viewHallticket() {
  return (
    <>
      <Navbar />
      <h1>hallticket</h1>
      <div className="halltickets">
        <h2> final exam</h2>
        <div className="roomseat">
          <h3>Seat No:</h3>
          <p>Allocated Room:</p>
        </div>
        <div className="details">
          <p>Name :</p>
          <p>Date of birth:</p>
          <p>Address:</p>
          <p>class:</p>
        </div>
        <div className="subjects">
          <h4>subject</h4>
          <h4>Start Time</h4>
          <h4>End Time</h4>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default viewHallticket;
