import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {TextField,Button} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
const NewUser=()=>{

    let tmp=new Array();

    const[user,setUser]=useState({
        username:"",
        password:"",
        conpassword:"",
        contact:0
    })

    const adding=()=>{

        tmp=JSON.parse(localStorage.getItem("profiles"))// read existing
        tmp.push(user)// add new user to existing 
        const txt=JSON.stringify(tmp);// to text
        localStorage.setItem("profiles",txt)// add to storage
        alert("User has added");

        /* const objs=JSON.parse(localStorage.getItem("profiles"))

        for(var pos in objs)
        {
            alert(objs[pos].username)
        } */

        setUser(()=>{
            return{
                username:"",
                password:"",
                conpassword:"",
                contact:0
            }
        })
    }

    const evs=(event)=>{
        const{name,value}=event.target;

        setUser((old)=>{
            return{
                ...old,
                [name]:value
            }
        });
    }
    return(
        <>
            <div className="container-fluid mt-lg-5">
                <h1 className="display-4 text-center text-primary">New User Enrollment</h1>
                <div className="row justify-content-center">
                    <form className="col-md-8 col-sm-12 rounded p-5 shadow">
                    <TextField
                    id="outlined-basic" 
                    label="Username" 
                    variant="outlined"
                    placeholder="Tell us username"
                    className="form-control mb-3" 
                    name="username"
                    value={user.username}
                    onChange={evs}
                    />
                    <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    className="form-control mb-3" 
                    autoComplete="current-password"
                    variant="outlined"
                    name="password"
                    placeholder="Choose password"
                    value={user.password}
                    onChange={evs}
                    />
                    <TextField
                    id="outlined-password-input"
                    label="Confirm Password"
                    className="form-control mb-3" 
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    placeholder="Confirm password"
                    name="conpassword"
                    value={user.conpassword}
                    onChange={evs}
                    />
                    <TextField
                    id="outlined-basic" 
                    label="Contact" 
                    className="form-control mb-3" 
                    variant="outlined"
                    placeholder="Tell us contact" 
                    name="contact"
                    value={user.contact}
                    onChange={evs}
                    />
                    <div className="row justify-content-around">
                        <Button className="col-2" variant="outlined" color="primary" onClick={adding}>
                            <AddIcon/>
                        </Button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default NewUser;