import { useDispatch } from "react-redux";
import { checkdetail } from "../../../actions/statecheck";
import "./itemdetail.css";
const Itemdetails = ({ index }) => {
  const dispatch = useDispatch();
  return (
    <div className="itemdetail">
      <h1>
        Product Detail{" "}
        <span
          onClick={() => {
            checkdetail(dispatch)(false);
          }}
        >
          X
        </span>
      </h1>
      <div className="detailbody">
        <div className="detailimage">
          <img
            src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1ldGElMjBxdWVzdDIlMjB2ciUyMGhlYWRzZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="headset"
          />
        </div>
        <div className="information">
          <p>Category1</p>
          <h2>Meta Quest2 VR headset</h2>
          <p id="description">
            Hundreds of hit games, one-of-a-kid experiences, live events, new
            ways to stay fit and a growing community Hundreds of hit games,
            one-of-a-kid experiences, live events, new ways to stay fit and a
            growing community
          </p>
          <div className="detailbtns">
            <button>Add</button>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Itemdetails;
