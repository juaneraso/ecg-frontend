import "./login.css";
const imgUrl = new URL("../assets/portada.jpeg", import.meta.url).href;

export function Login() {
  return (
    <>
      <div className="login">
        <div className="login-image">
          <div className="title">
            <h1>ECG</h1>
          </div>
          <div className="image">
            <img src={imgUrl} alt="" />
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
