
import './App.css';
import {useState} from "react";
function App() {
  const [itemToShow,setitemToShow] = useState("false")
 
  const items1  = {
    "JavaScript":["Eloquent JavaScript","You Don't Know JS"],
    "Fiction":["Shiva Trilogy","Harry Potter and the Sorcerer's Stone"],
    "Business":["Never Split the Difference","Loonshots"]
  }

  var itemsKey = Object.keys(items1);

  const itemDetail = (i)=>{
    
    var meaning = items1[i];
    setitemToShow(meaning);
  }
  var a = Math.floor(Math.random()*5)
  return (
    <div className="App">
      <h2>GoodBooks</h2>
      <h4>Checkout my favourite books. Select a genre to get started</h4>
      {itemsKey.map((i)=>{
      return <button onClick = {()=>{itemDetail(i)}} style = {{marginRight:"10px",cursor:"pointer"}}>{i}</button>
      })}
      <hr></hr>
      <div style = {{border:"1px solid black",marginLeft:"200px",marginRight:"200px"}}> {itemToShow ==="false" ? "Click on the above button" : itemToShow.map((i)=>{return <li>{i}<div>Rating : {a}/5</div></li>})} </div>
    </div>
  );
}

export default App;
