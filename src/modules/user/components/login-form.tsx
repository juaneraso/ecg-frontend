import "./login-form.css";

export function LoginForm() {
  return (
    <div className="login-form">
      <div className="form-title">
        <h3>Please fillout your information</h3>
      </div>
      <form>
        <div>
          <label>User name</label>
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input type="password" />
        </div>
        <div className="button-div">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}
