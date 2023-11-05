import React from "react";
import Home from "./Home";
import{Routes, Route} from "react-router"
import about from "./pages/about";
import contact from "./pages/contact";
import error from "./pages/error";
import service from "./pages/service";

const App = () => {
  return (
    <>
    <Routes>
     <Route exact path="/" Component={Home}></Route>
     <Route exact path="/about" Component={about}></Route>
     <Route exact path="/contact" Component={contact}></Route>
     <Route exact path ="*" Component={error}></Route>
     <Route exact path="/service" Component={service}></Route>
     </Routes> 
    </>
  );
};

export default App;
