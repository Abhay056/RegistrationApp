import "./App.css";
import Navbar from "./components/Navbar"; 
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import Home from "./components/Home";
import Help from "./components/Help"
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";  

export default function App() {
  const [darkMode, setDarkMode] = useState("light-mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 3000);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('mode') || 'light';
    setDarkMode(savedMode === 'dark');

    // Set initial class on body
    document.body.classList.add(savedMode === 'dark' ? 'dark-mode' : 'light-mode');
  }, []);

  const toggle = (e) => {
    // if (darkMode === "light-mode") {
    //   setDarkMode("dark-mode");
    //   document.body.className = "dark-mode";
    //   showAlert("Dark mode has been enabled", "success");
    // } else {
    //   setDarkMode("light-mode");
    //   document.body.className = "light-mode";
    //   showAlert("Light mode has been enabled", "success");
    // }
    const checked = e.target.checked;
    var newMode;
    if(newMode = checked) {
      newMode = 'dark';
      showAlert("Dark mode has been enabled", "success");
    } 
    else {
      newMode = 'light';
      showAlert("Light mode has been enabled", "success");
    }
    setDarkMode(checked);

    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(`${newMode}-mode`);

    localStorage.setItem('mode', newMode);
  };

  return (
    <Router>
      <Navbar title="Getting Started" mode={darkMode} toggle={toggle} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/help" element={<Help />} />
          <Route exact path="/register" element={<Textform header="Register Now" />} />
        </Routes>
      </div>
    </Router>
  );
}
