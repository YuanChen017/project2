import { useSelector } from "react-redux";
import Eachitem from "./eachitem";
import "./items.css";

const Productitems = () => {
  const listitems = useSelector((state) => state.product);
  const eachproduct = listitems.map((item, index) => {
    return <Eachitem item={item} key={`item-${index}`} index={index} />;
  });
  return <div className="lists">{eachproduct}</div>;
};
export default Productitems;
