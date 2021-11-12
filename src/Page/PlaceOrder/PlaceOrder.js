import React, { useState } from 'react';
import { Alert, Button, MenuItem, TextField } from '@mui/material';
import { Form } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';
import './PlaceOrder.css'



const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
    {
        value: 'BDT',
        label: 'TK',
    }
];



const PlaceOrder = () => {
    const [currenc, setCurrenc] = useState('EUR');
    const {user} = useAuth();

    const ininsialOrder = {displayName: user.displayName, email: user.email, price: '', phone: '' };

    const [orderinfo, setOrderinfo] = useState(ininsialOrder);
    

    //currencies funtion
    const hendalCurrenc = (carence) => {
        setCurrenc(carence.target.value)
    };


    const hendalOnBlure = (e) => {

        const field = e.target.name;
        const value = e.target.value;
        const newOder = {...orderinfo};
        newOder[field]= value;
        setOrderinfo(newOder);
        console.log(newOder);

    }

    const hendalSubmit = (evant) => {
        evant.preventDefault();
        <Alert severity="success">Your Order Has Been Placed</Alert>

        const newOrder = {
            ...orderinfo
        }

        // send to the server
        fetch('http://localhost:7000/oder', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => setOrderinfo(data));
    };

    return (
        <Form type='submit' className='from'>
            <h1>Place Your Order</h1>

                <TextField id="standard-basic"
                 label="Name" 
                 defaultValue={user.displayName} 
                 type="text"
                 name='displayName'
                 onBlur={hendalOnBlure}
                 variant="standard"
                 style={{ width: 300 }}
                 
                 /> <br /> <br />

                <TextField id="standard-basic" 
                label="E-mail" 
                defaultValue={user.email}
                type="email"
                variant="standard"
                onBlur={hendalOnBlure}
                name='email'
                style={{ width: 300 }}
                
                /><br /> <br />

                <TextField id="standard-basic" 
                label="Phone" 
                onBlur={hendalOnBlure}
                type="number"
                name='phone'
                variant="standard"
                style={{ width: 300 }}
                
                /><br /> <br />

                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={currenc}
                    onChange={hendalCurrenc}
                    helperText="Please select your currency"
                    variant="standard"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}<br /> <br />

                </TextField>
                <TextField 
                id="standard-basic"
                label="Price" 
                type="number" 
                onBlur={hendalOnBlure}
                variant="standard"
                name='price'
                defaultValue="Name"
                 /><br /> <br />

                <Button variant='contained' onClick={hendalSubmit} type='submit'> Place </Button>
            </Form>
    );
};

export default PlaceOrder;