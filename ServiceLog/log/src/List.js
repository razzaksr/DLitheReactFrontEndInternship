<<<<<<< HEAD
import Edit from "@material-ui/icons/Edit";
import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import EdiCheck from "./EdiCheck";

let item=null;
const List=(props)=>{
    let obj=JSON.parse(localStorage.getItem("registry"));

    const[selElem,setSelElem]=useState();

    const[is,setIs]=useState(false);

    const search=()=>{
        item=obj.find((ele,index)=>{
            return index===selElem;
        }) 

        setIs(true);

        alert("Selected index found @ search "+item.model);
    }

    //alert(delElem);

    
        /* obj=obj.filter((ele,index)=>{
            return index!==id
        })

        localStorage.setItem("registry",JSON.stringify(obj));

        alert("deletion approved"); */
    

    return(
        <>
            <div className="mt-lg-5 container-fluid">
                <div className="row justify-content-center">
                    {is?<EdiCheck data={item}/>:
                    <>
                    <div className="table-responsive">
                        <table className="table table-responsive-md table-hover table-warning rounded shadow">
                            <thead className="thead thead-dark">
                                <tr>
                                    <th>Registration Number</th><th>Model</th>
                                    <th>Customer Name</th><th>Customer Contact</th>
                                    <th>Address</th><th>Payment</th><th>type</th>
                                    <th>Bill</th><th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    obj.map((elem,pos)=>{
                                        return (
                                            <>
                                            <tr>
                                            
                                                <td>
                                                <a onClick={()=>setSelElem(pos)}>{elem.regnum}</a>
                                                </td>
                                            
                                            <td>{elem.model}</td>
                                            <td>{elem.name}</td>
                                            <td>{elem.contact}</td>
                                            <td>{elem.address}</td>
                                            <td>{elem.payment}</td>
                                            <td>{elem.type}</td>
                                            <td>{elem.bill}</td>
                                            <td>{elem.status}</td>
                                        </tr>
                                        </>)
                                    })
                                }
                            </tbody>
                        </table>
                        <input className="btn btn-outline-danger" type="button" value="Delete" onClick={()=>props.onDelete(selElem)}/>
                        {/* <input className="btn btn-outline-warning" type="button" value="Edit" onClick={()=>props.onEdit(selElem)}/> */}
                        <input className="btn btn-outline-warning" type="button" value="Edit" onClick={search}/>
                    </div>
                    </>}
                </div>
            </div>
        </>
    );
}
export {item};
=======
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const List=()=>{
    const obj=JSON.parse(localStorage.getItem("registry"));

    return(
        <>
            <div className="mt-lg-5 container-fluid">
                <div className="row justify-content-center">
                    <div className="table-responsive">
                        <table className="table table-responsive-md table-hover table-warning rounded shadow">
                            <thead className="thead thead-dark">
                                <tr>
                                    <th>Registration Number</th><th>Model</th>
                                    <th>Customer Name</th><th>Customer Contact</th>
                                    <th>Address</th><th>Payment</th><th>type</th>
                                    <th>Bill</th><th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    obj.map((elem,pos)=>{
                                        return (<tr>
                                            <td>{elem.regnum}</td>
                                            <td>{elem.model}</td>
                                            <td>{elem.name}</td>
                                            <td>{elem.contact}</td>
                                            <td>{elem.address}</td>
                                            <td>{elem.payment}</td>
                                            <td>{elem.type}</td>
                                            <td>{elem.bill}</td>
                                            <td>{elem.status}</td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
>>>>>>> 2161835c3f87f0cba35ebe37ce694cbd52f4d6ac
export default List;