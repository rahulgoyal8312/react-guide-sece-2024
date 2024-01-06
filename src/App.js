import { useState } from 'react';
import CursorComponent from './examples/cursor';

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? <CursorComponent /> : <p>Not Showing the component</p>}
      <button onClick={e => setShow(e => !e)}>{show ? "Hide" : "Show"}</button>
    </>
  )
}

