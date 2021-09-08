import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Bad Bank</Link>
      <div className="navbar-expand" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">Home</Link>
          <Link className="nav-item nav-link active" to="/register">Register</Link>
          <Link className="nav-item nav-link active" to="/login">Login</Link>
          <Link className="nav-item nav-link active" to="/deposit">Deposit</Link>
          <Link className="nav-item nav-link active" to="/data">DATA!!!</Link>
        </div>
      </div>
    </nav>
  )
};

export default MyNavbar;
