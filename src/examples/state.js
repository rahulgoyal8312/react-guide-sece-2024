import { useState } from "react";

// state management
const App = () => {
  const [state, setState] = useState(0);

  console.log({
    state: state,
    function: setState
  });

  // button handler to update the value of state variable.
  const btnHandler = () => {
    // state = 1;
    setState(1);

    console.log({
      state: state,
      function: setState
    });
  }

  return (
    <>
      <h2>State Management</h2>
      <br/>
      <div>
        <span>Current State: </span>
        <span>{state}</span>
      </div>
      <br/>
      <button onClick={btnHandler}>Update State by 1</button>
    </>
  )
}

export default App;
