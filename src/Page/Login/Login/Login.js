import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";



const Login = () => {

    const [logindata, setLogindata] = useState({});
    const {registraUser} = useAuth();
    const hestory = useHistory();


    const onBlure = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logindata };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLogindata(newLoginData)

    }

    const handelOnclick = e => {
        e.preventDefault();
        registraUser(logindata.email,logindata.password, logindata.name, hestory);
    }

    return (
        <div>

            <Typography variant="body1" gutterBottom>
                Login
            </Typography>
            <form onClick={handelOnclick}>

                <TextField sx={{ width: '30%' }}
                    id="standard-basic"
                    label="Your Email"
                    variant="standard"
                    type='email'
                    name='email'
                    onBlur={onBlure}

                /> <br />
                <TextField sx={{ width: '30%' }}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    name='password'
                    onBlur={onBlure}

                /> <br />


                <br />
                <br />
                <br />
                <Button sx={{ width: '75%' }} type="Submit">Login</Button>
                <br />
                <br />

                <p>..........................................</p>


                <Link to='/registration'>
                    <Button sx={{ width: '75%' }}> New Registration</Button>
                </Link>

            </form>
        </div>
    );
};

export default Login;