
import { useState } from "react"

function Searchbar({handleSearch,handleBack,appendTransaction}) {
    let [searchValue,setSearchValue] = useState('')
    
    let handleSetState = (value) => {
        setSearchValue(value)
        console.log(searchValue)
    }

        
    return ( 
     <div>
        <h1 id="pageHeader">Bank of Flatiron</h1>
        <a href ="https://bank-of-flat-iron-seven.vercel.app/?" id='back-button' >back</a>
        <input onChange = {(e)=>{handleSetState(e.target.value)}} value ={searchValue} id='searchInput' type = 'search' placeholder = 'search'></input>
        <button onClick={() => {
          handleSearch(searchValue)
          }} id = "search-button">Search</button>  
          <button onClick = {appendTransaction} id='add-button'>Add Transaction</button>
     </div>
     );
}

export default Searchbar;