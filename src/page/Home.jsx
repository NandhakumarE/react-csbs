import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="about">About</Link>
      <Link to="contact">contact</Link>
      <Link to="tasks">tasks</Link>
    </div>
  );
};

export default Home;
