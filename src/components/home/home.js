import Productpage from "./productpage/pdpage";
import AddProduct from "./addproduct/addproduct";
import Itemdetails from "./productitems/itemdetails";
import { useSelector } from "react-redux";

const Homedesktop = () => {
  const isadd = useSelector((state) => state.states.isadd);
  const isdetail = useSelector((state) => state.states.isdetail);
  return (
    <>{isadd ? <AddProduct /> : isdetail ? <Itemdetails /> : <Productpage />}</>
  );
};
export default Homedesktop;
