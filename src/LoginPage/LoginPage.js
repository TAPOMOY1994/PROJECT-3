import "./LoginPage.css";
import { Link } from "react-router-dom";


export default function LoginPage() {


  return <>
    <div className="Login">
      <div className="facebook">
        <div className="facebooktext">facebook</div>
        <div className="title">
          Facebook helps you connect and share<br></br> with the people in your
          life.
        </div>
      </div>
      <div className="loginContainer">
        <div className="logindetail">
          <input type="email" placeholder="Email address or phone number" />
          <br></br>
          <input type="password" placeholder="Password" />
          <br></br>
          <button className="btn">
            <Link to="/HeaderArea">Log in</Link>
          </button>

          <div className="forget">
            <a href="forget">Forgotten password?</a>
            <br></br>
          </div>
        </div>
        <div className="create">
          <br></br>
          <button className="btns">Create new account</button>
        </div>
        <p></p>
        <br></br>
        <div className="page">
          <a href="createpage">Create a Page</a>for a celebrity,brand or
          business.
        </div>
      </div>
    </div>

    </>
  
}
