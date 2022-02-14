import "./cart.css";
import { useDispatch } from "react-redux";
import { checkcart } from "../../actions/statecheck";
const Cart = () => {
  const numberofitems = 3;
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <div className="cartheader">
        <p>
          Carts <span>({numberofitems})</span>
        </p>
        <p
          id="cartclose"
          onClick={() => {
            checkcart(dispatch)(false);
          }}
        >
          {" "}
          x{" "}
        </p>
      </div>
      <div className="cartbody"></div>
      <div className="discountcode">
        <label for="code">Apply Discount Code</label>
        <br />
        <input type="text" name="code" />
        <button>Apply</button>
      </div>
      <div className="pricedetails"></div>
      <button className="checkout">Continue to checkout</button>
    </div>
  );
};
export default Cart;
