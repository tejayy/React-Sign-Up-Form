import email from "../../assets/email.png";
import password from "../../assets/password.png";
import user from "../../assets/person.png";
import "./LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user} />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src={email} />
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="input">
          <img src={password} />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Forgot Password? <span>Click Here</span>
      </div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
