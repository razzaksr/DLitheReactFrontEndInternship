import React, { useState } from "react";
import ReactDom, { render } from "react-dom";
import { Route, Switch } from "react-router";
import { Link, Redirect } from "react-router-dom";
import ContactUs from "./ContactUs";
import EdiCheck from "./EdiCheck";
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
<<<<<<< HEAD
        <Route path="/view" exact component={()=><List onDelete={del}/> }/>
        {/* <Route path="/edit" exact component={()=><Edit data={bike}/>}/> */}
        {/* <Route path="/editcheck/:reg" exact component={()=><EdiCheck/>}/> */}
=======
        <Route path="/view" exact component={()=><List/>}/>
>>>>>>> 2161835c3f87f0cba35ebe37ce694cbd52f4d6ac
      </Switch>
    </>
  );
}

export default App;
