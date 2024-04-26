import CustomNavbar from "./Components/CustomNavbar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import './App.css'
import Build from "./Components/Build-Components/Builder";


function App() {
  return (
    <>
      <Router>
        <CustomNavbar/>
        <Routes>
          <Route exact path="/" Component={Header}></Route>
          <Route exact path="/build" Component={Build}></Route>
          {/* <Route exact path="/create_resume" Component={}></Route> */}
        </Routes>
      </Router>

    </>
  );
}

export default App;
