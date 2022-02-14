import { useSelector, useDispatch } from "react-redux";
import { deleteproduct } from "../../../actions/productcheck";
import { checkdetail } from "../../../actions/statecheck";
import "./eachitem.css";
const Eachitem = ({ index }) => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.product[index].imagelink);
  const name = useSelector((state) => state.product[index].productname);
  const price = useSelector((state) => state.product[index].price);

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
          <button id="add">Add</button>
          <button id="edit">Edit</button>
        </div>
      </div>
    </>
  );
};
export default Eachitem;
