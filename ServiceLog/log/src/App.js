import React from "react";
import ReactDom from "react-dom";
import { Route, Switch } from "react-router";
import ContactUs from "./ContactUs";
import Home from "./Home";
import LogMenu from "./LogMenu";
import NewUser from "./NewUser";

const App=()=>{
  return(
    <>
      <LogMenu/>
      <Switch>
        <Route path="/" exact component={()=><Home/>}/>
        <Route path="/newuser" exact component={()=><NewUser/>}/>
        <Route path="/contact" exact component={()=><ContactUs/>}/>
      </Switch>
    </>
  );
}

export default App;
