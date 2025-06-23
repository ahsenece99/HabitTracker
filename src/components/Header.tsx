import { Link } from "react-router-dom";
import '../css/Header.css';

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <div className="nav-center">
        <Link to="/tasks">My Tasks</Link>
        <Link to="/add">Add New Task</Link>
        <Link to="/progress">Progress</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
};

export default Header;