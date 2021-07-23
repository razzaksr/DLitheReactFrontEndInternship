<<<<<<< HEAD
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';


const InTake=()=>{

    let registry=new Array();

    const[bike,setBike]=useState({
        regnum:"",
        model:"",
        name:"",
        contact:0,
        address:"",
        payment:"",
        type:"",
        bill:0.0,
        status:"live"
    });

    const takeit=()=>{
        registry=JSON.parse(localStorage.getItem("registry"))
        registry.push(bike);
        localStorage.setItem("registry",JSON.stringify(registry))
        alert("New bike added");
        remove()

        const objs=JSON.parse(localStorage.getItem("registry"))

        for(var pos in objs)
        {
            alert(objs[pos].regnum+" "+objs[pos].name);
        }
    }

    const useve=(event)=>{
        const{name,value}=event.target;
        setBike((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const remove=()=>{
        setBike(()=>{
            return{
                regnum:"",
                model:"",
                name:"",
                contact:0,
                address:"",
                payment:"",
                type:"",
                bill:0.0,
                status:"live"
            }
        })
    }

    return(
        <>
            <div className="mt-lg-5 container-fluid">
                <h1 className="text-primary text-center display-4">Intake new Bike</h1>
                <div className="row justify-content-center">
                    <form className="rounded shadow p-4 col-md-8 col-lg-7 col-sm-12">
                        <TextField 
                        className="w-100 mb-3"
                        id="outlined-basic" 
                        label="Registration number" 
                        variant="outlined" 
                        name="regnum"
                        onChange={useve}
                        value={bike.regnum}
                        />
                        <TextField 
                        id="outlined-basic"
                        className="w-100 mb-3"
                        label="Consumer name" 
                        variant="outlined" 
                        name="name"
                        onChange={useve}
                        value={bike.name}
                        />
                        <TextField 
                        className="w-100 mb-3"
                        id="outlined-basic" 
                        label="Bike model" 
                        variant="outlined" 
                        name="model"
                        onChange={useve}
                        value={bike.model}
                        />
                        <TextField 
                        className="w-100 mb-3"
                        id="outlined-basic" 
                        label="Consumer Contact" 
                        variant="outlined" 
                        name="contact"
                        onChange={useve}
                        value={bike.contact}
                        />
                        <TextField 
                        className="w-100 mb-3"
                        id="outlined-basic" 
                        label="Address" 
                        variant="outlined" 
                        name="address"
                        onChange={useve}
                        value={bike.address}
                        />
                        <FormControl component="fieldset" className="w-100 mb-3">
                        <FormLabel component="legend">Payment</FormLabel>
                        <RadioGroup aria-label="Payment" name="payment" onChange={useve} value={bike.payment} >
                            <FormControlLabel value="free" control={<Radio />} label="Free" />
                            <FormControlLabel value="paid" control={<Radio />} label="Paid" />
                        </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" className="w-100 mb-3">
                        <FormLabel component="legend">Type</FormLabel>
                        <RadioGroup aria-label="Type" name="type" onChange={useve} value={bike.type}>
                            <FormControlLabel value="specific" control={<Radio />} label="Specific" />
                            <FormControlLabel value="general" control={<Radio />} label="General" />
                        </RadioGroup>
                        </FormControl>

                        <div className="row justify-content-around">
                            <Button className="col text-success" onClick={takeit}>
                                <MotorcycleIcon className="w-100 d-block" style={{height:'40px'}}/>
                            </Button>
                            <Button className="col text-danger" onClick={remove}>
                                <RotateLeftIcon className="w-100 d-block" style={{height:'40px'}}/>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

=======
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';


const InTake=()=>{

    let registry=new Array();

    const[bike,setBike]=useState({
        regnum:"",
        model:"",
        name:"",
        contact:0,
        address:"",
        payment:"",
        type:"",
        bill:0.0,
        status:"live"
    });

    const takeit=()=>{
        registry=JSON.parse(localStorage.getItem("registry"))
        registry.push(bike);
        localStorage.setItem("registry",JSON.stringify(registry))
        alert("New bike added");
        remove()

        const objs=JSON.parse(localStorage.getItem("registry"))

        for(var pos in objs)
        {
            alert(objs[pos].regnum+" "+objs[pos].name);
        }
    }

    const useve=(event)=>{
        const{name,value}=event.target;
        setBike((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const remove=()=>{
        setBike(()=>{
            return{
                regnum:"",
                model:"",
                name:"",
                contact:0,
                address:"",
                payment:"",
                type:"",
                bill:0.0,
                status:"live"
            }
        })
    }

    return(
        <>
            <div className="mt-lg-5 container-fluid">
                <h1 className="text-primary text-center display-4">Intake new Bike</h1>
                <div className="row justify-content-center">
                    <form className="rounded shadow p-4 col-md-8 col-lg-7 col-sm-12">
                        <TextField 
                        className="w-100 mb-3"
                        id="outlined-basic" 
                        label="Registration number" 
                        variant="outlined" 
                        name="regnum"
                        onChange={useve}
                        value={bike.regnum}
                        />
                        <TextField 
                        id="outlined-basic"
                        className="w-100 mb-3"
                        label="Consumer name" 
                        variant="outlined" 
                        name="name"
                        onChange={useve}
                        value={bike.name}
                        />
                        <TextField 
                        className="w-100 mb-3"
                        id="outlined-basic" 
                        label="Bike model" 
                        variant="outlined" 
                        name="model"
                        onChange={useve}
                        value={bike.model}
                        />
                        <TextField 
                        className="w-100 mb-3"
                        id="outlined-basic" 
                        label="Consumer Contact" 
                        variant="outlined" 
                        name="contact"
                        onChange={useve}
                        value={bike.contact}
                        />
                        <TextField 
                        className="w-100 mb-3"
                        id="outlined-basic" 
                        label="Address" 
                        variant="outlined" 
                        name="address"
                        onChange={useve}
                        value={bike.address}
                        />
                        <FormControl component="fieldset" className="w-100 mb-3">
                        <FormLabel component="legend">Payment</FormLabel>
                        <RadioGroup aria-label="Payment" name="payment" onChange={useve} value={bike.payment} >
                            <FormControlLabel value="free" control={<Radio />} label="Free" />
                            <FormControlLabel value="paid" control={<Radio />} label="Paid" />
                        </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" className="w-100 mb-3">
                        <FormLabel component="legend">Type</FormLabel>
                        <RadioGroup aria-label="Type" name="type" onChange={useve} value={bike.type}>
                            <FormControlLabel value="specific" control={<Radio />} label="Specific" />
                            <FormControlLabel value="general" control={<Radio />} label="General" />
                        </RadioGroup>
                        </FormControl>

                        <div className="row justify-content-around">
                            <Button className="col text-success" onClick={takeit}>
                                <MotorcycleIcon className="w-100 d-block" style={{height:'40px'}}/>
                            </Button>
                            <Button className="col text-danger" onClick={remove}>
                                <RotateLeftIcon className="w-100 d-block" style={{height:'40px'}}/>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

>>>>>>> 2161835c3f87f0cba35ebe37ce694cbd52f4d6ac
export default InTake;