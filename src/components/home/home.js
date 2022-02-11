import Productpage from "./productpage/pdpage";
import AddProduct from "./addproduct/addproduct";
import { useSelector } from "react-redux";

const Homedesktop = () => {
  const isproduct = useSelector((state) => state.isproduct);
  return <>{isproduct ? <AddProduct /> : <Productpage />}</>;
};
export default Homedesktop;
