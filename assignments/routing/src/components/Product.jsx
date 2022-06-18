
import React from "react";
import { Link } from "react-router-dom";

const ProductPage = ()=>{
    const [Product,setProduct] = React.useState([]);

    React.useEffect(()=>{
        fetch(`http://localhost:3005/Product`)
        .then((res)=>res.json())
        .then((res)=>setProduct(res))
        .catch((err)=>console.log(err))

},[])
    console.log(Product)
return(
    <>
    <h1>ProductPage</h1>
    <table>
        <thead>
            <tr>
                <th>SNO</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>More Details</th>
            </tr>
        </thead>
        <tbody>
        {
        Product.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <Link to = {`/Product/${item.id}`}>More...</Link>
                </td>
            </tr>
        ))
    }

    </tbody>
    </table>
 

    
    
    </>

)
   
}
export {ProductPage};