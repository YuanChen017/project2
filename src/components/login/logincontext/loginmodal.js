import { useState } from "react";
import {personalProjectApi} from "../../../common/accapi"
import "./loginmodal.css"

const Loginmodal = ({setIsUser,setIslogin,setIssignup}) => {
    const [isemail,setIsemail] = useState('');
    const [ispassword,setIspassword] = useState('');
    const checkacc = () => {
        let result = '';
        personalProjectApi.signIn({email: isemail,password: ispassword}).then(
            response => response.json().then(
                res =>{ 
                    result = res.status
                    console.log(result);
                    if(result === true){
                        setIsUser(true);
                    }
                }
            )
        )
        .catch(e => {alert(e.message)})
    }
    return (
        <div className="modalborder">
            <div className="title">
                <h1>Sign in to your account</h1>
                <button id="closebutton" onClick={()=>setIslogin(false)}> X </button>
            </div>
            <div className="mainmodal">
                <label for="email">Email</label><br />
                <input name="email" id="email" placeholder="you@example.com" value={isemail} onChange={(e)=>setIsemail(e.target.value)}/><br />
                <label for="password">Password</label><br />
                <input type="password" name="password" id="password" placeholder="•••••••••••" value={ispassword} onChange={(e)=>setIspassword(e.target.value)}/><br />
                <button id="signin" onClick={checkacc}>sign in</button>
                <div id="modifyaccount">
                    <p>Dont have an account? <a onClick={()=>{setIssignup(true)}}>Sign up</a></p>
                    <a onClick={()=>{setIslogin(false)}} id="resetpassword">forget_passwords?</a>
                </div>
             </div>
        </div>
        
    )
}
export default Loginmodal