import react from 'react';
import { useState } from "react"

function Searchbar({handleSearch,handleBack,appendTransaction}) {
    let [searchValue,setSearchValue] = useState('')
    
    let handleSetState = (value) => {
        setSearchValue(value)
        console.log(searchValue)
    }

        
    return ( 
     <div>
        <button onClick = {handleBack} id='back-button' >back</button>
        <input onChange = {(e)=>{handleSetState(e.target.value)}} value ={searchValue} id='searchInput' type = 'search' placeholder = 'search'></input>
        <button onClick={() => {
          handleSearch(searchValue)
          }} id = "search-button">Search</button>  
          <button onClick={appendTransaction} id='add-button'>Add Transaction</button>
     </div>
     );
}

export default Searchbar;