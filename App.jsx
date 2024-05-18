import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Welcome name="Mario" age={20} />
      <Welcome name="Luigi" age={30} />
      <Welcome name="John" age={50} />
      <Welcome name="Doe" age={25} />
      <Welcome name="Alice" age={10} />
    </div>
  );
}

export default App;
