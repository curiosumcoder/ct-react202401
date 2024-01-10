import { useState } from "react";
import "./App.css";

// Stateless functional component
function App() {
  //let count: number = 0;
  const [count, setCount] = useState(10);
  return (
    <>
      <h1>React</h1>
      {count}
      <hr />
      {/* <button onClick={function () {console.log('clic')}}>TEST</button> */}
      {/* <button onClick={() => console.log('clic')}>TEST</button> */}
      {/* <button onClick={() => count++}>TEST</button> */}
      <button
        onClick={() => {
          console.log("clic");
          //count++;
          setCount(count+10);
          console.log(count);
        }}>
        TEST
      </button>
    </>
  );
}

export default App;
