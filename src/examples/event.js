// import BasicComponent from "./examples/basic";
import BaseComponent from "./components/index";

function EventHandler() {
  // let name = "Adarsh";

  const buttonEventHandler = (event) => {
    console.log(event);
  }

  return (
    <>
      <button 
        onClick={buttonEventHandler}
      >Alert User!</button>
      <br/>
      <br/>
      <br/>
      <input 
        onChange={(event) => {
          // console.dir(event.target);
          console.log({
            name: event.target.name,
            value: event.target.value
          })
        }}
        // onKeyDown={e => console.log("onKeyDown: ", e)}
        placeholder="Enter Name"
        name={"firstname"}  
      />
    </>
  )
  // return (
  //   <BaseComponent/>
  // )
}

export default App;
