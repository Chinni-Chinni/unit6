import React from "react"

const PrintData = ({getdata}) => {
    console.log(getdata)
    return (
    <div id="display">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Adress</th>
            </tr>
        </thead>
        <tbody>
            {
                getdata.map((item)=>(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.Age}</td>
                        <td>{item.Address}</td>

                    </tr>

                ))
            }
        </tbody>
    </table>
</div>
    )

   
}
export { PrintData}