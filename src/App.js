import CustomNavbar from "./Components/CustomNavbar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import './App.css'
import Build from "./Components/Build-Components/Builder";
import Register from "./user/Register";
import { useState } from "react";
import Login from "./user/Login";



function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <Router>
        <CustomNavbar isLogged = {isLogged} setIsLogged = {setIsLogged}/>
        <Routes>
          <Route exact path="/" Component={Header}></Route>
          <Route exact path="/build" 
            Component = {(props) => <Build {...props} isLogged= {isLogged}  setIsLogged = {setIsLogged}/>}
            >
          </Route>
          <Route exact path="/login" 
            Component = {(props) => <Login {...props} isLogged= {isLogged}  setIsLogged = {setIsLogged}/>}
            >
          </Route>
          <Route exact path="/signup" Component={Register}></Route>
          {/* <Route exact path="/create_resume" Component={}></Route> */}
        </Routes>
      </Router>

    </>
  );
}

export default App;
