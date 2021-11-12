import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';



const MakeAdmin = () => {
    const [email, setEmail] = useState('');
     

    const hendalonBluer = e => {
        setEmail(e.target.value)
        console.log(e.target.value);
    }



    const hendalSubmit = e => {
        
        
        const user = {email};

        fetch('https://guarded-beach-94669.herokuapp.com/user/admin', {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });


        e.preventDefault();

    }


    
    return (
        <div>
            <h2>Make  An Admin</h2>

            <form onSubmit={hendalSubmit}>
            <TextField
             id="standard-basic" 
             label="Email" 
             type='email'
             onBlur={hendalonBluer}             
             variant="standard" />
            <Button variant="contained"
            onClick={hendalSubmit}
            >
  Make An Admin
</Button>

            </form>
        </div>
    );
};

export default MakeAdmin;