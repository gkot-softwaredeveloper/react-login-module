import './App.css';

function App() {
  return (
    <div className="container">
    <div className="login-container">
      <div className="login-title"></div>
      <div className="login-inputs">
        <div className="login-space">
          <span className="login-label">Login</span>
          <span className="login-input"
            ><input id="login" type="text" className="login" aria-label="login"
          /></span>
          <span id="login-validation"></span>
        </div>
        <div className="password-space">
          <span className="password-label">Password</span>
          <span className="password-input"
            ><input
              id="password"
              type="password"
              className="password"
              aria-label="password"
          /></span>
          <span id="password-validation"></span>
        </div>
      </div>
      <div className="login-buttons">
        <button id="login-btn" type="submit" className="login-btn">Login</button>
        <button id="forgot-btn" type="submit" className="forgot-password-btn">
          Forgot password?
        </button>
      </div>
    </div>
  </div>
  );
}

export default App;
