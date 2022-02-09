import "./resetmodal.css";
import { useState } from "react";
import { personalProjectApi } from "../../../common/accapi";

const ResetModal = ({ setPasswordreset, setIssend }) => {
  const [existemail, setExistemail] = useState("");

  const checkexisted = () => {
    let checkresult = "";
    personalProjectApi
      .emailcheck({ email: existemail })
      .then((response) =>
        response.json().then((res) => {
          checkresult = res.status;
          console.log(checkresult);
          if (checkresult === true) {
            setIssend(true);
            setPasswordreset(false);
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
        <h1>Update your password</h1>
        <button id="closebutton" onClick={() => setPasswordreset(false)}>
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
          value={existemail}
          onChange={(e) => setExistemail(e.target.value)}
        />
        <br />
        <button id="updatepw" onClick={checkexisted}>
          Update password
        </button>
      </div>
    </div>
  );
};
export default ResetModal;
