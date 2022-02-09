import "./home.css"
import moti from "../home/moti.jpeg"

const Homedesktop =({setIsdesktop,setAddpd}) =>{
    return (
        <>
        <div className="wholedesktop">
            <div className="desktop-header">
                <h1>Product</h1>
                <div className="controls">
                    <select name="filter" id="filter">
                        <option value="Last-added">Last added</option>
                        <option value="Price:increase">Price: low to high</option>
                        <option value="Price:decrease">Price: high to low</option>
                    </select>
                    <button id="add-product" onClick={()=>{setIsdesktop(false);setAddpd(true);}}>Add Product</button>
                </div>
            </div>
            <div className="homebody">
                <img src={moti} alt="moti" /> 
            </div>
        </div>
        </>
    )
}
export default Homedesktop
