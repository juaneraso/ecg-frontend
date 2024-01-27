import "./login.css";
import portada from "../assets/portada.jpeg";

export function Login() {
  return (
    <>
      <div className="login">
        <div className="login-image">
          <div className="title">
            <h1>ECG</h1>
          </div>
          <div className="image">
            <img src={portada} alt="" />
          </div>
        </div>
        <div className="login-form">
          <div className="title">
            <div>
              <h1>Wellcome to ECG online</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
