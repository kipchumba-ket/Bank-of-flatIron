import React from "react"


function Table({data}){
let transactions = data.map((transaction)=>{
    return <tr className="tableRow" key={transaction.id}>
            <td className="tableData" >{ transaction.category }</td>
            <td className="tableData" >{ transaction.description }</td>
            <td className="tableData" ><span className="currency">Kes</span>{ transaction.amount.toLocaleString()}</td>
            <td className="tableData" >{ transaction.date } </td>
            <td><button onClick={(e)=>{
               e.target.parentNode.parentNode.remove()
            }} id="delete-button">X</button></td>
          </tr>
          
})

return <table >
            <thead id="tableHead">
                <tr id="tableHeaderContainer">
                    <th className="th-container">Category</th>
                    <th className="th-container">Description</th>
                    <th className="th-container">Amount</th>
                    <th className="th-container">Date</th>
                </tr>
            </thead>
           <tbody id="table-body">
                {transactions}
           </tbody>
        </table>
}

export default Table;