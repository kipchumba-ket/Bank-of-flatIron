
import './App.css';
import Table from './components/Table';
import Form from './components/form';
import Searchbar from './components/searchBar';
import { useEffect,useState } from "react";

function App() {
  const [transactions,setTransactions] = useState(null)
  const [initialState,setInitialState] = useState(null)
  const [isLoading,setIsLoading] = useState(true)
 
  
  useEffect(() =>{
  fetch("https://json-server-vercel-sandy.vercel.app/transactions")
  .then((response)=> response.json())
  .then((res)=>{ 
    console.log(res)
    sortByCategory(res)
    setInitialState(res)
    setIsLoading(false)
  })
  },[])

  
let sortByCategory = (data) => {
data.sort((a,b)=>{
  let categoryA = a.category.toLowerCase()
  let categoryB = b.category.toLowerCase()
  
  if(categoryA < categoryB ) {
    return -1;
}
if (categoryA > categoryB ) {
    return 1;
}
return 0;
})
  setTransactions(data)
}


  let handleSearch = (value) => {
    
    let income = transactions.filter((transaction )=> {return transaction.description.toLowerCase().includes(value.toLowerCase())})
    if(income.length > 0){
    console.log(income)
    setTransactions(income)}
    else{console.log("No transactions")}
  }
  

  let [name, setName] = useState(false)
  let [newName, setNewName] = useState(true)
  let appendTransaction = ()=>{
    setName(true)
    setNewName(false)
    console.log('true')
  }
  let removeTransaction = ()=>{
    setNewName(true)
    setName(false)
    console.log('true')
  }
  let handleBack = () =>{
    setTransactions(initialState)
    setName(false)
    setNewName(true)
  }
 
  let newClassName = newName ? "formVisibible" : "formHidden"
  let className = name ? "formVisible" : "formHidden"


  return (
    <div className="App">
      <div className = {newClassName} id='mainContent'>
      {transactions && <Searchbar appendTransaction = {appendTransaction} handleBack = {handleBack} handleSearch = {handleSearch}/>}
      {isLoading &&   <div id="loader4">
        <div id="loadline">
        </div>
        <div id="loadline2">
        </div>
    </div>}
      {transactions && <Table data = {transactions}/>}
      </div>
      <Form removeTransaction = {removeTransaction} className = {className} />
    </div>
  );
}

export default App;
