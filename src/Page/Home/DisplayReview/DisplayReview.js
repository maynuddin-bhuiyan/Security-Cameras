import { Rating, Typography } from '@mui/material';
import React from 'react';
import './DisplayReview.css';

const DisplayReview = (props) => {
    const {displayName,email,textarea,simplecontrolled} = props.review;
    return (
        <div className='DisplayGrid'>


  <Typography variant="h5" component="div">
          {displayName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {email}
        </Typography>

        <Typography variant="body2">
          {textarea}
        </Typography>

        <Rating
        name="simple-controlled"
        value={simplecontrolled}
        
      />
  
         
        </div>
    );
};

export default DisplayReview;