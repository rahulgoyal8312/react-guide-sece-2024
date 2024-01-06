import { useEffect, useState } from "react";

const App = () => {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(100);
  const [state3, setState3] = useState(200);

  // const arg1 = () => {
  //   console.log("Log on initial render", {state, state2, state3})
  //   console.log("Log on every render when changes in state3 or state")
  // }
  // const arg2 = [state, state3];

  // console.log("Component Re-renders;")
  // useEffect(arg1, arg2);

  useEffect(() => {
    console.log("Log on initial render", {state, state2, state3})
    console.log("Log on every render when changes in state3 or state")
  }, [state, state3]);

  return (
    <>
      <h1>Side Effects and useEffect Hook</h1>
      <p>State: {state}</p>
      <button onClick={() => setState(100)}>Update State</button>
      <p>State2: {state2}</p>
      <button onClick={() => setState2(200)}>Update State2</button>
      <p>State3: {state3}</p>
      <button onClick={() => setState3(300)}>Update State3</button>
    </>
  )
}

export default App;
