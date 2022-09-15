import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../actions/authedUser";
import "./nav.css";
const Nav = ({ dispatch, authedUserId }) => {
  const logout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
  };

  return (
    <nav className="nav-container">
      <Link to="/" className="link active">
        Home
      </Link>
      <Link to="/leaderboard" className="link">
        Leaderboard
      </Link>
      <Link to="/new" className="link">
        New Poll
      </Link>
      <span className="nav-user" data-testid="user-information">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
          height={20}
          width={20}
          alt="user profile"
        />
        {authedUserId}
      </span>
      <button onClick={logout} className="btn-logout">
        Logout
      </button>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUserId: authedUser.id,
});

export default connect(mapStateToProps)(Nav);
