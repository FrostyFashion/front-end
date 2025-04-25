import "./CSS/Auth.css";
const Auth = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-title">
          Login <span></span>{" "}
        </h2>
        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <div className="login-links">
          <a href="#">Forgot your password?</a>
          <a href="signup">Create account</a>
        </div>
        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Auth;
