import React, { Fragment, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { RecoverVerifyEmailRequest } from '../../ApiRequest/APIRequest';
import { ErrorToast, IsEmail } from '../../Helper/FormHelper';

const SendOTP = () => {
    let emailRef = useRef();
    let navigate = useNavigate();
    const verifyEmail = ()=>{
        let email = emailRef.value;
        console.log(email)
        debugger;
        if(IsEmail(email)){
            ErrorToast("valid email address required")
        } else{
            RecoverVerifyEmailRequest(email).then((result)=>{
                if(result===true){
                    navigate("/")
                    //66
                }
            })
        }
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4>EMAIL ADDRESS</h4>
                                <br />
                                <label>Your email address</label>
                                <input ref={(input) => emailRef = input} placeholder="User Email" className="form-control animated fadeInUp" type="email" />
                                <br />
                                <button onClick={verifyEmail} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SendOTP;