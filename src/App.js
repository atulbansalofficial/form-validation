import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [selecter, setSelector] = useState("");
  const [tnc, setTnc] = useState(false);
 

  const getFormData = (e) => {
    e.preventDefault();
  
   console.log(name,selecter,tnc);
   
    
   
    
  };
  
  return (
    <div>
      <div className="container ">
        <h1>Handle Form in React</h1>
        <form onSubmit={getFormData}>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
          <br />
          <br />
          <select onChange={(e)=> setSelector(e.target.value)}>
            <option value="0">Select Option</option>
            <option value="1">Marvel</option>
            <option value="2">DC</option>
            <option value="3">starMan</option>
          </select>
          <br />
          <br />
          <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
          &nbsp;&nbsp;
          <span>Accept tearm & Condition</span>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
