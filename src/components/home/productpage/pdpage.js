import "./pdpage.css";
import Productitems from "../productitems/items";
import { useDispatch } from "react-redux";
import { checkaddproduct } from "../../../actions/statecheck";

const Productpage = () => {
  const dispatch = useDispatch();
  return (
    <>
      {}
      <div className="wholedesktop">
        <div className="desktop-header">
          <h1>Product</h1>
          <div className="controls">
            <select name="filter" id="filter">
              <option value="Last-added">Last added</option>
              <option value="Price:increase">Price: low to high</option>
              <option value="Price:decrease">Price: high to low</option>
            </select>
            <button
              id="add-product"
              onClick={() => checkaddproduct(dispatch)(true)}
            >
              Add Product
            </button>
          </div>
        </div>
        <div className="homebody">
          <Productitems />
        </div>
      </div>
    </>
  );
};
export default Productpage;
