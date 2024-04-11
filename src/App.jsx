import { useState } from "react";

import TicTacToe from "./Componets/TicTacToe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TicTacToe />
    </>
  );
}

export default App;
