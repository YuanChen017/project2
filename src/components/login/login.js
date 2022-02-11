import Loginmodal from "./logincontext/loginmodal";
import Signupmodal from "./signupcontext/signup";
import ResetModal from "./pwreset/resetmodel";
import Sendmail from "./sendmail/sendmail";
import { useSelector } from "react-redux";

const Login = () => {
  const islogin = useSelector((state) => state.islogin);
  const issignup = useSelector((state) => state.issignup);
  const ispwreset = useSelector((state) => state.ispwreset);
  const isemail = useSelector((state) => state.isemail);
  return (
    <>
      {islogin && <Loginmodal />}
      {issignup && <Signupmodal />}
      {ispwreset && <ResetModal />}
      {isemail && <Sendmail />}
    </>
  );
};

export default Login;
