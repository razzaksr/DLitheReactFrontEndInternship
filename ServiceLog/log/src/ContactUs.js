import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {TextField,Button} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Send from "@material-ui/icons/Send";
import  "react-icons/fa";
import { FaFacebook, FaGooglePlusG, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactUs=()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="mt-lg-5 row justify-content-center">
                    <div className="col-md-6 col-sm-12">
                        <form className="rounded p-3 shadow">
                        <TextField
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined"
                        className="form-control mb-3" 
                        name="name"
                        />
                        
                        <TextField
                        id="outlined-basic" 
                        label="Contact" 
                        className="form-control mb-3" 
                        variant="outlined"
                        name="contact"
                        />

                        <TextField
                        id="outlined-basic" 
                        label="Email" 
                        className="form-control mb-3" 
                        variant="outlined"
                        name="email"
                        />
                        <textarea
                        name="messgae"
                        className="form-control"
                        placeholder="Message"
                        />
                        <div className="mt-5 row justify-content-around">
                            <Button className="col-2" variant="outlined" color="primary">
                                <Send/>
                            </Button>
                        </div>
                        </form>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="row justify-content-around">
                            <a className="col" href="https://www.facebook.com/Dlitheconsultancyservices/">
                                <FaFacebook color="#3b5998" style={{height:'200px',width:'250px'}}/>
                            </a>
                            <a className="col" href="https://www.linkedin.com/company/dlithe?originalSubdomain=in">
                                <FaLinkedin color="#0077b5" style={{height:'200px',width:'250px'}}/>
                            </a>
                        </div>
                        <div className="row justify-content-around">
                            <a className="col" href="https://www.facebook.com/Dlitheconsultancyservices/">
                                <FaTwitter color="#00acee" style={{height:'200px',width:'250px'}}/>
                            </a>
                            <FaGooglePlusG className="col" href="https://www.linkedin.com/company/dlithe?originalSubdomain=in" style={{height:'200px',width:'250px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;