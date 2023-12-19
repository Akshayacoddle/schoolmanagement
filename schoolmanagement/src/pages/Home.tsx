import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(localStorage.getItem("jwttoken"));

    if (!localStorage.getItem("jwttoken")) navigate("/login");
  }, [navigate]);
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
}

export default Home;
