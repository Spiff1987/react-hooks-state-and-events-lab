import { useState } from "react";


function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [mode, setMode] = useState("light");

  const handleModeToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };


return (
  <div className={mode}>
    <button onClick={handleModeToggle}>Toggle Mode</button>
  </div>
);
}

export default App;

