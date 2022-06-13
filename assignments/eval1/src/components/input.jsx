import React from "react";
// import { Retrive } from "./retrive";
// import { Retrive } from "./retrive";



const InputTaking = () => {
    const [inputData, setInput] = React.useState(
        {
            title: "",
            gender: "",
            price: "",
            category: "",
            image: "",

        }
    );

    const [getdata, setdata] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:3005/products`)
            .then((res) => res.json())
            .then((res) => setInput(res))
            .catch((err) => console.log(err))
    }, [])

    React.useEffect(() => {
        fetch(`http://localhost:3005/products`)
            .then((res) => res.json())
            .then((res) => setdata(res))
            .catch((err) => console.log(err))
    }, [])


    const HandleChange = (e) => {
        const { name, value } = e.target;

        setInput({ ...inputData, [name]: value })

    }
    // console.log(inputData)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputData)

        fetch(`http://localhost:3005/products`, {
            method: "POST",
            body: JSON.stringify(inputData),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log(err))


    }



    const { title, gender, price, category, image } = inputData


    return (
        <>
            <h1>input</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="EntenProductName" name="title" onChange={HandleChange} value={title} />
                <input type="text" placeholder="Enter Price " name="price" onChange={HandleChange} value={price} />
                <input type="text" placeholder="Enter Catogory" name="category" onChange={HandleChange} value={category} />

                <select value={gender} placeholder="select" onChange={HandleChange} name="gender" >
                    <option value="Gender">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="other">other</option>
                </select>

                <input type="text" placeholder="Paste Image" name="image" onChange={HandleChange} value={image} />
                <input type="submit" className="button" />

            </form>
            <div id="table">
                {
                    getdata.map((item) => (
                        <div className="inside-table">
                            <h1>{item.title}</h1>
                            <h2>{item.price}</h2>
                            <h3>{item.gender}</h3>
                            <h4>{item.category}</h4>
                            {/* <h4 >{item.image}</h4> */}
                            <img src={item.image}></img>
                        </div>
                      
                    ))
                }
            </div>


        </>


    )

}

export { InputTaking }