import "./css/home.css";

function Exam() {
  return (
    <div className="containerexam">
      <div className="head">
        <h1>Exam Schedule</h1>
      </div>
      <div className="body">
        <div className="examdiv">
          <label id="lab">Exam name:</label>
          <input type="text" id="examname" name="fname" />
        </div>
        <div className="examdiv">
          <label>Select Class:</label>
          <select id="class1" className="class11"></select>
        </div>
        <div className="examdiv">
          <label>Select Subject:</label>
          <select id="subject" className="subject"></select>
        </div>
        <div className="examdiv">
          <label>select Room:</label>
          <select id="room"></select>
        </div>
        <div className="examdiv">
          <label>Academic Year:</label>
          <select id="year"></select>
        </div>
        <div className="examdiv">
          <label>Exam Type:</label>
          <select id="type" name="type"></select>
        </div>
        <div className="examdiv">
          <label>Start date:</label>
          <input type="datetime-local" id="startdate" name="startdate" />
        </div>
        <div className="examdiv">
          <label>End date:</label>
          <input type="datetime-local" id="lastdate" name="lastdate" />
        </div>
        <div className="examdiv">
          <button className="btn" id="button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Exam;
