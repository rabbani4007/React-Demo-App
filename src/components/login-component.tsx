import React, { useState } from "react";

const LoginComponent = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.warn(username);
    console.warn(password);
    console.warn("Remember Me :" + rememberMe);
    // const token = await loginUser({
    //   username,
    //   password
    // });
    //setToken(token);
  };

  return (
    <div className="col-sm-6">
      <form onSubmit={handleSubmit}>
        <h3>Log in</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Sign in
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};

export default LoginComponent;
