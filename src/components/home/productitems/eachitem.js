import { useSelector, useDispatch } from "react-redux";
import { deleteproduct } from "../../../actions/productcheck";
import { checkdetail, checkqty } from "../../../actions/statecheck";
import { useState } from "react";
import "./eachitem.css";
const Eachitem = ({ index }) => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.product[index].imagelink);
  const name = useSelector((state) => state.product[index].productname);
  const price = useSelector((state) => state.product[index].price);
  const addtocart = useSelector((state) => state.product[index].addtocart);
  const isaddqty = useSelector((state) => state.states.isaddqty);
  const [qty, setQty] = useState(0);

  return (
    <>
      <div className="item">
        <button
          id="closebtn"
          onClick={() => {
            deleteproduct(dispatch)(index);
          }}
        >
          {" "}
          X{" "}
        </button>
        <div id="image">
          <img
            src={image}
            alt={name}
            onClick={() => checkdetail(dispatch)(true)}
          />
        </div>
        <div id="info">
          <p>{name}</p>
          <p>
            <strong>${price}</strong>
          </p>
        </div>
        <div className="btns">
          <div id="changebtn">
            {isaddqty ? (
              <div id="addqty">
                <p>
                  <span
                    onClick={() => {
                      if (qty <= 0) {
                        checkqty(dispatch)(false);
                      }
                      setQty(qty - 1);
                    }}
                  >
                    -
                  </span>
                  {qty}
                  <span
                    onClick={() => {
                      setQty(qty + 1);
                    }}
                  >
                    +
                  </span>
                </p>
              </div>
            ) : (
              <button
                id="add"
                onClick={() => {
                  checkqty(dispatch)(true);
                  setQty(1);
                }}
              >
                Add
              </button>
            )}
          </div>
          <button id="edit">Edit</button>
        </div>
      </div>
    </>
  );
};
export default Eachitem;
