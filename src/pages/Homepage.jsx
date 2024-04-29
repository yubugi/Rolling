import { Link, NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div>
        <Link to="/">Rolling</Link>
      </div>
      <div>
        <NavLink to="List">구경해보기</NavLink>
      </div>
      <div>
        <NavLink to="Post">롤링페이퍼만들기</NavLink>
      </div>
    </div>
  );
};

export default Homepage;
