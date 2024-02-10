import "./login-form.css";

export function LoginForm() {
  return (
    <div className="login-form">
      <div className="title">
        <h1>Please fillout your information</h1>
      </div>
      <div className="form">
        <form>
          <label>
            User name
            <input type="text" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}
