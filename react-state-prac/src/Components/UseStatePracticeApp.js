import React, {useState} from "react";

function UseStatePracticeApp() {

  // checking useState
  // console.log(useState());


  // logic to change var name when btn is clicked 
  // define a var
  

  // Defining a function to manipulate the text when btn is clicked!
  var defaultValue = "Original Text !"
  const [originalValue, setOriginalValue] = useState(defaultValue);

  const changeName = () => {
    let updatedValue = "Changed Text!"
    setOriginalValue(updatedValue);
  }


  return (
    <div className="App">
      {/* <p>React State Practice</p> */}

      {/* To update the value from it's Original value to Updated value
      We use the concept of React Hooks => "useState" */}
      <h1>{originalValue}</h1>
      <button className="btn" onClick={changeName}> Click Me!</button>
      <p>------------------------------------------End UseStatePracticeApp---------------------------------------------------</p>
    </div>
    
  );
  
}

export default UseStatePracticeApp;
