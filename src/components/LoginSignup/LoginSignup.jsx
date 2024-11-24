import {useState} from "react";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import user from "../../assets/person.png";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      {/* ----------INPUTS---------- */}
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user} />
            <input type="text" placeholder="Username" />
          </div>
        )}
        {/* ----------EMAIl---------- */}
        <div className="input">
          <img src={email} />
          <input type="email" placeholder="Email Address" />
        </div>
        {/* ----------Password---------- */}
        <div className="input">
          <img src={password} />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {/* ----------Fogot Password---------- */}
      {action == "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password? <span>Click Here</span>
        </div>
      )}
      {/* ----------SUBMIT---------- */}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
