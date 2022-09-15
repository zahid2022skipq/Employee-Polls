import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin } from "../actions/authedUser";

const Login = ({ dispatch, loggedIn }) => {
  const [username, setUsername] = useState("zahid");
  const [password, setPassword] = useState("zahid");

  if (loggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get("redirectTo");
    return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
  }

  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(username, password));
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h1 data-testid="login-heading">Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="">
            Username
          </label>
          <div className="">
            <input
              value={username}
              onChange={handleUsername}
              type="text"
              name="username"
              id="username"
              data-testid="username"
              className=""
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="password" className="">
            Password
          </label>
          <div className="">
            <input
              value={password}
              onChange={handlePassword}
              type="password"
              name="password"
              id="password"
              data-testid="password"
              className="btn"
            />
          </div>
        </div>
        <div className="">
          <button type="submit" data-testid="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Login);
