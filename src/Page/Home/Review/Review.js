import { Button, Rating, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Form } from 'react-bootstrap';
import useAuth from '../../../Hook/useAuth';
import './Review.css';




const Review = () => {
    const { user } = useAuth();
    const [value, setValue] = useState(2);

    const ininsialOrder = { displayName: user.displayName, email: user.email, textarea: '', simplecontrolled: '' };

    const [orderinfo, setOrderinfo] = useState(ininsialOrder);

    const hendalOnblure = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviwe = { ...orderinfo };
        newReviwe[field] = value;
        setOrderinfo(newReviwe);
        console.log(newReviwe);
    }

    const handelonSubmit = evant => {
        evant.preventDefault();

        const newDispalyReviwe = {
            ...orderinfo
        }

        fetch('https://guarded-beach-94669.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDispalyReviwe)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }




    return (
        <Form type='submit' className='from'>

            <h1>Give Us You Feedback</h1>
            <TextField id="standard-basic"
                label="E-mail"
                type="email"
                variant="standard"
                onBlur={hendalOnblure}
                name='email'
                style={{ width: 300 }}

            /><br /> <br />

            <TextField id="standard-basic"
                label="Name"
                type="text"
                name='displayName'
                onBlur={hendalOnblure}
                variant="standard"
                style={{ width: 300 }}

            /> <br /> <br />

            <TextareaAutosize
                aria-label="textarea"
                placeholder="Your Comment"
                onBlur={hendalOnblure}
                type="text"
                name='textarea'
                style={{ width: 500 }}
            /><br /><br />

            <Typography component="legend"></Typography>
            <Rating
                name="simplecontrolled"
                onBlur={hendalOnblure}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            /><br /><br />

            <Button onClick={handelonSubmit} variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </Form>
    );
};

export default Review;