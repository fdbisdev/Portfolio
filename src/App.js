import React, { useState } from "react";
import Home from "./pages/Home/Home";

import "./App.css";
import "./css/reset.css";

function App() {
  const [theme, setTheme] = useState(false);

  function handleToggleTheme() {
    setTheme(oldTheme => !oldTheme);
    if(theme){
      document.body.style.backgroundColor = "#E5E5E5";
    }
    else{
      document.body.style.backgroundColor = "#1D1D1D";
    }
  }

  return (
    <>
    <input type="checkbox" className="switchThemeCheckbox" id="check" onClick={handleToggleTheme}/>
    <div className="home">
      <Home isDarkMode={theme}/>
    </div>
    </>
  );
}

export default App;
