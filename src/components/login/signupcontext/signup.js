import "./signupmodal.css";
import { useState } from "react";
import { personalProjectApi } from "../../../common/accapi";
import { checksign, checklogin } from "../../../actions";
import { useDispatch } from "react-redux";

const Signupmodal = () => {
  const [signupemail, setsignupemail] = useState("");
  const [signuppassword, setsignuppassword] = useState("");
  const dispatch = useDispatch();
  const signupacc = () => {
    let didsignup = "";
    personalProjectApi
      .signUp({ email: signupemail, password: signuppassword })
      .then((response) =>
        response.json().then((res) => {
          didsignup = res.status;
          console.log(didsignup);
          if (didsignup === true) {
            alert(res.message);
          }
        })
      )
      .catch((e) => {
        alert(e.message);
      });
  };
  return (
    <div className="modalborder">
      <div className="title">
        <h1>Sign up an account</h1>
        <button
          id="closebutton"
          onClick={() => {
            checksign(dispatch)(false);
          }}
        >
          {" "}
          X{" "}
        </button>
      </div>
      <div className="mainmodal">
        <label for="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          value={signupemail}
          onChange={(e) => setsignupemail(e.target.value)}
        />
        <br />
        <label for="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={signuppassword}
          onChange={(e) => setsignuppassword(e.target.value)}
        />
        <br />
        <button id="signup" onClick={signupacc}>
          Create account
        </button>
        <div id="modifyaccount">
          <p>
            Already have and account{" "}
            <a
              onClick={() => {
                checksign(dispatch)(false);
                checklogin(dispatch)(true);
              }}
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signupmodal;
