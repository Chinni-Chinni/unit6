
import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
    const [Product, setProduct] = React.useState([]);
    const [count, setcount] = React.useState(0);

    React.useEffect(() => {
        fetch(`  http://localhost:8080/Product`)
            .then((res) => res.json())
            .then((res) => setProduct(res))
            .catch((err) => console.log(err))

    }, [])
    console.log(Product)
    return (
        <>
            {
                Product.map((product) => (
                    <div id="product">
                        <h1>{product.name}</h1>
                        <h3>{product.description}</h3>
                        <button>ADD TO CART</button>

                        <div style={{display:"flex",marginLeft:"100px"}}>
                            <button onClick={() => setcount(count + 1)}>INC</button>
                            <h4>NOT ADD</h4>
                            <button onClick={() => setcount(count - 1)}>DEC</button>
                        </div>
                        <button>REMOVE</button>
                    </div>
                ))
            }



        </>

    )

}
export { ProductPage};