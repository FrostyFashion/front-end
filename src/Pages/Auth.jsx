import "./CSS/Auth.css";
const Auth = () => {
  return (
    <div className="auth-container">
      <div className="container">
        <h1>Sign Up</h1>
        <div className="auth-fields">
          <input type="text" placeholder="username" />
          <input type="email" placeholder="user email" />
          <input type="password" placeholder="password" />
          <button>submit</button>
          <p className="auth-login">
            already have account? <span>Login here</span>
          </p>
          <div className="auth-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of use and privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
