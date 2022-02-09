import "./sendmail.css";
import maillogo from "../sendmail/Vector.png";

const Sendmail = ({ setIslogin, setIssend }) => {
  return (
    <div className="modalborder-mail">
      <div className="title">
        <button
          id="closebutton"
          onClick={() => {
            setIslogin(true);
            setIssend(false);
          }}
        >
          {" "}
          X{" "}
        </button>
      </div>
      <div className="mainmodal-mail">
        <img src={maillogo} />
        <p>
          We have sent the update password link to your emial, please check that
          ！
        </p>
      </div>
    </div>
  );
};
export default Sendmail;
