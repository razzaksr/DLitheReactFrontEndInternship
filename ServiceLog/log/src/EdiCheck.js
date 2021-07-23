import React, { useState } from "react";
import { Button,  TextField } from '@material-ui/core';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";

const EdiCheck=(props)=>{
    let registry=JSON.parse(localStorage.getItem("registry"));
    /* alert(props.data.model);
    
    const[bike,setBike]=useState({
        regnum:props.data.regnum,
        model:props.data.model,
        name:props.data.name,
        contact:props.data.contact,
        address:props.data.address,
        payment:props.data.payment,
        type:props.data.type,
        bill:props.data.bill,
        status:props.data.status
    }); */

    //const data=useParams();

    const [bike,setBike]=useState({
        regnum:props.data.regnum,
        model:props.data.model,
        name:props.data.name,
        contact:props.data.contact,
        address:props.data.address,
        payment:props.data.payment,
        type:props.data.type,
        bill:props.data.bill,
        status:props.data.status
      });

    /*const users=data.reg;
    //alert(users);
    
    let registry=JSON.parse(localStorage.getItem("registry"));

    let item=registry.find((one)=>{
        //alert(ind)
        return one.regnum===users;
    })

    alert(item.model);*/

    /* setBike(()=>{
        return{
            regnum:item.regnum,
                    model:item.model,//props.data.model,
                    name:item.name,//props.data.name,
                    contact:item.contact,//props.data.contact,
                    address:item.address,//props.data.address,
                    payment:item.payment,//props.data.payment,
                    type:item.type,//props.data.type,
                    bill:item.bill,//props.data.bill,
                    status:item.status//props.data.status
        }
    }) */

    /*for(var pos in registry)
    {
        if(registry[pos].regnum===users)
        {
            //bike=registry[pos];
            setBike(()=>{
                return{
                    regnum:registry[pos].regnum,
                    model:registry[pos].model,//props.data.model,
                    name:registry[pos].name,//props.data.name,
                    contact:registry[pos].contact,//props.data.contact,
                    address:registry[pos].address,//props.data.address,
                    payment:registry[pos].payment,//props.data.payment,
                    type:registry[pos].type,//props.data.type,
                    bill:registry[pos].bill,//props.data.bill,
                    status:registry[pos].status//props.data.status
                }
            }) 
        }
        break;
    }*/

    /* registry.map((ele,id)=>{
        if(ele.regnum===users)
        {
            bike=ele;
            //alert(ele.model);
            /* setBike(()=>{
                return{
                    regnum:ele.regnum,
                    model:ele.model,//props.data.model,
                    name:ele.name,//props.data.name,
                    contact:ele.contact,//props.data.contact,
                    address:ele.address,//props.data.address,
                    payment:ele.payment,//props.data.payment,
                    type:ele.type,//props.data.type,
                    bill:ele.bill,//props.data.bill,
                    status:ele.status//props.data.status
                }
            }); 
        }
    })  */




const takeit=()=>{
    registry.map((elem,ind)=>{
        if(elem.regnum===bike.regnum)
        {
            registry[ind]=bike;
            alert("Edit approved");
            return;
        }
    });
    localStorage.setItem("registry",JSON.stringify(registry))
    alert("bike edited");
    /* registry=JSON.parse(localStorage.getItem("registry"))
    registry.push(bike);
    localStorage.setItem("registry",JSON.stringify(registry))
    alert("Edited");
    remove()

    const objs=JSON.parse(localStorage.getItem("registry"))

    for(var pos in objs)
    {
        alert(objs[pos].regnum+" "+objs[pos].name);
    } */
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

    return(<>
        <div className="mt-lg-5 container-fluid">
            <h1 className="text-primary text-center display-4">Edit Bike</h1>
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
                    <TextField 
                    className="w-100 mb-3"
                    id="outlined-basic" 
                    label="PAyment" 
                    variant="outlined" 
                    name="payment"
                    onChange={useve}
                    value={bike.payment}
                    />
                    <TextField 
                    className="w-100 mb-3"
                    id="outlined-basic" 
                    label="Type of Service" 
                    variant="outlined" 
                    name="type"
                    onChange={useve}
                    value={bike.type}
                    />
                    <TextField 
                    className="w-100 mb-3"
                    id="outlined-basic" 
                    label="Bill" 
                    variant="outlined" 
                    name="bill"
                    onChange={useve}
                    value={bike.bill}
                    />
                    <TextField 
                    className="w-100 mb-3"
                    id="outlined-basic" 
                    label="Status" 
                    variant="outlined" 
                    name="status"
                    onChange={useve}
                    value={bike.status}
                    />
                    <div className="row justify-content-around">
                        <Button className="col text-success" onClick={takeit}>
                            <AirplanemodeActiveIcon className="w-100 d-block" style={{height:'40px'}}/>
                        </Button>
                        <Button className="col text-danger" onClick={remove}>
                            <RotateLeftIcon className="w-100 d-block" style={{height:'40px'}}/>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </>);
}

export default EdiCheck;