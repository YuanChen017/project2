import Loginmodal from "./logincontext/loginmodal";
import Signupmodal from "./signupcontext/signup";
import { useState } from "react";
import ResetModal from "./pwreset/resetmodel";
import Sendmail from "./sendmail/sendmail";

const Login = ({ setIsUser, setIslogin, islogin }) => {
  const [issignup, setIssignup] = useState(false);
  const [passwordreset, setPasswordreset] = useState(false);
  const [issend, setIssend] = useState(false);
  return (
    <>
      {islogin && (
        <Loginmodal
          setIsUser={setIsUser}
          setIslogin={setIslogin}
          setIssignup={setIssignup}
          setPasswordreset={setPasswordreset}
        />
      )}
      {issignup && (
        <Signupmodal setIslogin={setIslogin} setIssignup={setIssignup} />
      )}
      {passwordreset && (
        <ResetModal setPasswordreset={setPasswordreset} setIssend={setIssend} />
      )}
      {issend && <Sendmail setIssend={setIssend} setIslogin={setIslogin} />}
    </>
  );
};

export default Login;
