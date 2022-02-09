import Loginmodal from "./logincontext/loginmodal";
import Signupmodal from "./signupcontext/signup";
import { useState } from "react";
const Login = ({setIsUser,setIslogin,islogin})=> {
    const [issignup,setIssignup] = useState(false);
    return(
        <>
        {islogin && <Loginmodal setIsUser={setIsUser} setIslogin={setIslogin} setIssignup={setIssignup}/>}
        {issignup && <Signupmodal setIslogin={setIslogin} setIssignup={setIssignup} />}
        </>
    )
}

export default Login