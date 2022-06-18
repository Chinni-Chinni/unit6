import React  from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Productdetails = styled.div`

width:40%;
margin:auto;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
text-align:center;




`;


const ProductDetailsPage = ()=>{
    const itemId = useParams();
    console.log(itemId.itemId);
    const [productDetails,setProductDetails] = React.useState({});
  
    React.useEffect(()=>{
        fetch(`http://localhost:3005/Product/${itemId.itemId}`)
        .then((res)=>res.json())
        .then((res)=>setProductDetails(res))
        .catch((err)=>console.log(err))
},[itemId]);
    return (
        <Productdetails>
        <h1>ProductDetailsPage</h1>
        <p>productId : {productDetails.id}</p>
        <h3> ProductName : {productDetails.name}</h3>
        <h3>ProductPrice : {productDetails.price}</h3>
        
        </Productdetails>
        
    )

}

export {ProductDetailsPage};