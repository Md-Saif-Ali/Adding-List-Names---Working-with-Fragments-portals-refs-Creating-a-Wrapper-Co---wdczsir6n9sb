import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import List from "./List";
const App = () => {
  //code here
  return (
   const [name, setName]=useState("")
  const [names, setNames]=useState([])
  return (
    <div id="main">
       <input id="input" onChange={(e)=> setName(e.target.value)} />
      <button id="button" onClick={()=> setNames([...names, name])}>Click</button>
       <ul id="list">
        
      <List names={names} />
      </ul>
    </div>
  )
}


export default App;
