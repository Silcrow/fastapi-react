import React,  { useState, useContext } from "react";

import {UserContext} from "../context/UserContext";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [, setToken] = useContext(UserContext);

    return (
      <div className="column">
          <form className="box">
            <h1 className="title has-text-centered">Register</h1>
              <div className="field">
                <label className="label">Email Address</label>
                  <div className="control">
                    <input type="email"
                        placeholder="Enter Email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        required
                    />
                  </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                  <div className="control">
                    <input type="password"
                        placeholder="Enter Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        required
                    />
                  </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                  <div className="control">
                    <input type="password"
                        placeholder="Enter Password" value={confirmationPassword}
                        onChange={(e) => setConfirmationPassword(e.target.value)}
                        className="input"
                        required
                    />
                  </div>
              </div>
              <br />
            <button className="button is-primary" type="submit">Register</button>
        </form>
      </div>
    )
};

export default Register;