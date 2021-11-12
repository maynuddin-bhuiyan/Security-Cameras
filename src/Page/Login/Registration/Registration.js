import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from '../../../Hook/useAuth';
import './Registration.css';



const Registration = () => {

    const [logindata, setLogindata] = useState({});
    const { registraUser, loginWithGoogle } = useAuth();
    const hostory = useHistory();

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
        if(logindata.password2 !== logindata.password){
            alert('jkdfhgfjkdsg ')
            return
        }

        registraUser(logindata.email, logindata.password, logindata.name, hostory);
    }

    return (
        <>

            <Typography variant="body1" gutterBottom>
                Registration
            </Typography>

            <form onClick={handelOnclick}>
                <TextField sx={{ width: '30%' }}
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    type='text'
                    name='text'
                    onBlur={onBlure}

                />
                <br />

                <TextField sx={{ width: '30%' }}
                    id="standard-basic"
                    label="Phone"
                    variant="standard"
                    type='number'
                    name='Phone'
                    onBlur={onBlure}

                /> <br />

                <TextField sx={{ width: '30%' }}
                    id="standard-basic"
                    label="email"
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

                <TextField sx={{ width: '30%' }}
                    id="standard-password-input"
                    label="Re-Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    name='password2'
                    onBlur={onBlure}

                /> <br />
                <br />
                <br />

                <Button sx={{ width: '30%' }} type="Submit">Registration</Button>



                <br />
                <br />

                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <small >Already Registered. Please Login</small>
                </Link>
                <br />
                <br />

                <Link to='/registration'>
                    <Button onClick={loginWithGoogle} sx={{ width: '50%' }} type="Submit">Login With Google</Button>
                </Link>





            </form>







        </>
    );
};

export default Registration;