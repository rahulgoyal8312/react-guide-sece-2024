import { useState } from "react";
import TopicsCoveredComponent from "./examples/TopicsCovered";

// state management
const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = (event, value = 1) => {
    setCounter(counter + value);
  }

  const decrementHandler = (event, value = 1) => {
    setCounter(counter - value);
  }

  // operation => INCR | DECR
  const counterHandler = (event, value = 1, operation = "INCR") => {
    let valueToAdd = value;
    if (operation === "DECR") {
      valueToAdd = -valueToAdd;
    }
    setCounter(counter + valueToAdd);
  }

  return (
    <>
      <TopicsCoveredComponent/>
      
      <h1>Counter Application</h1>
      <div style={{ padding: 12 }}>
        <span>Counter: {counter}</span>
      </div>

      {
        counter < 0 
          ?
          <div style={{ padding: 12, background: "yellow" }}>
            <span>*Value is negative</span>
          </div>
          :
          <></>
      }

      <div className="action-btn" style={{ padding: 12 }}>

        <button onClick={(event) => counterHandler(event, 1000, "INCR")}>
          Increase by 1000
        </button>

        <button onClick={(event) => counterHandler(event, 2, "INCR")}>
          Increase by 2
        </button>

        <button onClick={incrementHandler}>Increase by 1</button>
        <button onClick={decrementHandler}>Decrease by 1</button>

        <button onClick={function (event) {
          counterHandler(event, 2, "DECR");
        }}>Decrease by 2</button>

        <button onClick={function (event) {
          counterHandler(event, 1000, "DECR");
        }}>Decrease by 1000</button>
      </div>
    </>
  )
}

export default App;
