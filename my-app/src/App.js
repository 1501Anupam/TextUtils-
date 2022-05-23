import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import React, {useState} from 'react';
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  const toggleMode = () =>{
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor="black";
      showAlert("Dark mode enabled successfully", "success");
      document.title = "Text Utils Darks Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode enabled successfully", "success");
      document.title = "Text Utils Light Mode";
    }
  };

  const showAlert = (message, type)=> {
      setAlert({
          msg: message,
          type: type
         });
         setTimeout(() => {
          setAlert(null);
         }, 1500);
      };

  return (
    <>
      <Router>
        <Navbar
          title="My Text Utils"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/" element={<Textbox heading="Try Text Utils - Lowercase to Uppercase | Uppercase to Lowercase | Clear the text" mode={mode} showAlert={showAlert}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
