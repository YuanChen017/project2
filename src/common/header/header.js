import { Textfile } from "../Textfile";
import shoppinglogo from "../header/cart.png";
import "./header.css";
import { checklogin } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isuser = useSelector((state) => state.isuser);
  const loginhandel = () => {
    if (!isuser) {
      checklogin(dispatch)(true);
    } else {
      checklogin(dispatch)(false);
    }
  };
  return (
    <div className="header">
      <h1>
        {Textfile.LOGO_TEXT}
        <span id="logo-text">{Textfile.LOGO_TEXT2}</span>
        <span id="logocompany">{Textfile.LOGO_COMPANY}</span>
      </h1>
      <input type="text" name="search" id="search" placeholder="Search" />
      <button className="search-icon">
        <i className="fa fa-search"></i>
      </button>
      <div className="signin">
        <div id="signlogo">
          <div id="circle"></div>
          <div id="body"></div>
          <div id="star">&#9733;</div>
        </div>
        <p onClick={loginhandel}>
          {isuser ? Textfile.SIGN_OUT : Textfile.SIGN_IN}
        </p>
      </div>
      <div className="price">
        <img src={shoppinglogo} alt="shoppingicon" />
        <p>{Textfile.PRICE}</p>
      </div>
    </div>
  );
};
export default Header;
