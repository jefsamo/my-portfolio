import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <ul className="header-links">
      <li>
        <Link to="/">Olawale Shopeyin</Link>
      </li>
      <li>
        <Link to="/">Backend Engineer</Link>
      </li>
      <li>
        <Link to="/">mailto:hi@waleshopeyin.xyz</Link>
      </li>
      <li>
        <Link to="/">Twitter</Link>
      </li>
      <li>
        <Link to="/">Read.cv</Link>
      </li>
      <li>
        <Link to="/">LinkedIn</Link>
      </li>
    </ul>
  );
};

export default Header;
