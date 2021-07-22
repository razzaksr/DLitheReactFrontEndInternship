import React from "react";
import ReactDom from "react-dom";
import { Route, Switch } from "react-router";
import ContactUs from "./ContactUs";
import Home from "./Home";
import InTake from "./InTake";
import List from "./List";
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
        <Route path="/in" exact component={()=><InTake/>}/>
        <Route path="/view" exact component={()=><List/>}/>
      </Switch>
    </>
  );
}

export default App;
