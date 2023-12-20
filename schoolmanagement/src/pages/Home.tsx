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
    console.log(localStorage.getItem("jwttoken"));

    if (!localStorage.getItem("jwttoken")) navigate("/login");
  }, [navigate]);

  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul>
            <button onClick={HandleClick} type="submit" value="submit">
              logout
            </button>
          </ul>
        </div>
      </nav>
      <div>
        <h1>Welcome to the Home Page!</h1>
      </div>
    </>
  );
}

export default Home;
