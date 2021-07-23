import React, { useState } from "react";
import ReactDom, { render } from "react-dom";
import { Route, Switch } from "react-router";
import { Link, Redirect } from "react-router-dom";
import ContactUs from "./ContactUs";
import Edit from "./Edit";
import Home from "./Home";
import InTake from "./InTake";
import List from "./List";
import LogMenu from "./LogMenu";
import NewUser from "./NewUser";

const App=()=>{

  let obj=JSON.parse(localStorage.getItem("registry"));

  const del=(id)=>{
    alert("element going to delete is "+id);
      obj=obj.filter((ele,index)=>{
        return index!==id
    })

    localStorage.setItem("registry",JSON.stringify(obj));

    alert("deletion approved");
  }

  return(
    <>
      <LogMenu/>
      <Switch>
        <Route path="/" exact component={()=><Home/>}/>
        <Route path="/newuser" exact component={()=><NewUser/>}/>
        <Route path="/contact" exact component={()=><ContactUs/>}/>
        <Route path="/in" exact component={()=><InTake/>}/>
        <Route path="/view" exact component={()=><List onDelete={del}/> }/>
        {/* <Route path="/edit" exact component={()=><Edit data={bike}/>}/> */}
        {/* <Route path="/editcheck/:reg" exact component={()=><EdiCheck/>}/> */}
      </Switch>
    </>
  );
}

export default App;
