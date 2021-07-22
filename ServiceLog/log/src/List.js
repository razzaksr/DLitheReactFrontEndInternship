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
export default List;