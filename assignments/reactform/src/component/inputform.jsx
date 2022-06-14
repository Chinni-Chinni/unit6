import React from "react";
// import { PrintData,Printing } from "./printData";
import { PrintData } from "./printData";

const ReactForm = () => {
    const [inputData, setData] = React.useState({
        name: "",
        Age: "",
        Address: "",
        department: "",
        Salary: "",
        state: false

    })

    const [getdata, Setdata] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:3002/employee`)
            .then((res) => res.json())
            .then((res) => Setdata(res))
            .catch((err) => console.log(err))

    }, [])

    const HandleChange = (e) => {

        const { name, value } = e.target;

        setData({ ...inputData, [name]: value })
        React.useEffect(() => {
            fetch(`http://localhost:3002/employee`)
                .then((res) => res.json())
                .then((res) => setData(res))
                .catch((res) => console.log(res))
        }, [])

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(` http://localhost:3002/employee`, {
            method: "POST",
            body: JSON.stringify(inputData),
            headers: {
                "Content-type": "application/json",
            }

        })
            .then((res) => res.json())
            .then((res) => (res))
            .catch((err) => console.log(err))

    }


    const { name, Age, Address, department, Salary, state } = inputData;
    // console.log(typeof(inputData))
    // console.log(inputData)

    return (
        <>
            {/* <div  style = {{height:"400px",background:"gray", color:"white"}}  onMouseMove={(eve)=>setvalue(`${(eve.clientX,eve.clientY)}`)}>
            
        </div> */}
            <h3>Employee Data</h3>
            <div id="formset">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="EnterName" name="name" onChange={HandleChange} value={name} />
                    <input type="text" placeholder="Enter Age" name="Age" onChange={HandleChange} value={Age} />
                    <input type="text" placeholder="Enter Address" name="Address" onChange={HandleChange} value={Address} />

                    <select value={department} placeholder="select" onChange={HandleChange} name="department" >
                        <option value="dep">select</option>
                        <option value="marketing">marketing</option>
                        <option value="finance">finance</option>
                        <option value="sales">sales</option>
                    </select>

                    <input type="text" placeholder="Enter Salary" name="Salary" onChange={HandleChange} value={Salary} />
                    <label>
                        IsMarried :  <input type="checkbox" checked={state} name="state" onChange={HandleChange} value={state} />
                    </label>
                    <input type="submit" className="button" />
                </form>
                <PrintData getdata={getdata} />

            </div>

        </>
    )
}

export { ReactForm };