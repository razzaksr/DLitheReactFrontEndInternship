import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Home=()=>{

    const[person,setPerson]=useState("")

    let pros=new Array(); 

    const[given,setGiven]=useState({
        username:"",
        password:""
    })

    const eve=(event)=>{
        const{name,value}=event.target;
        setGiven((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    const clean=()=>{
        setGiven(()=>{
            return{
                username:"",
                password:""
            }
        })
    }
    const login=()=>{
        //alert(given.username+" "+given.password+" @ user given");
        const objs=JSON.parse(localStorage.getItem("profiles"))

        for(var pos in objs)
        {
            //alert(objs[pos].username+" "+objs[pos].password);
            if(given.username===objs[pos].username && given.password===objs[pos].password)
            {
                setPerson(given.username);
                alert("User found "+person);
                clean();
                return;
            }
        }
    }

    return(
        <>
            <div className="container-fluid mt-lg-5">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-12 align-self-center shadow rounded p-4">
                    {(person!="")?
                    <h1 style={{textTransform:"capitalize"}} className="display-4 text-center text-primary">{person}</h1>:
                    <>
                    <h1>Login to LogService</h1>
                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" 
                                className="form-control" 
                                onChange={eve}
                                value={given.username}
                                placeholder="Tell us username"
                                name="username"
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" 
                                className="form-control" 
                                onChange={eve}
                                value={given.password}
                                placeholder="Tell us password"
                                name="password"
                                />
                            </div>
                            <div className="mt-lg-3 row justify-content-around">
                                <input type="button" className="col btn btn-success" onClick={login} value="Login"/>
                                <input type="button" className="col btn btn-danger" onClick={clean} value="Clear"/>
                            </div>
                        </form>
                        
                        <a href="/newuser" className="text-primary float-end">Create New User</a>
                        </>}
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src="images/service.jfif" className="w-100 rounded shadow" style={{height:'600px'}}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;