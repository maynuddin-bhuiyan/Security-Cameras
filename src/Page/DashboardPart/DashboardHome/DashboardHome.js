import React from 'react';
import {  Grid} from '@mui/material';
import { Box } from '@mui/system';
import ReviewItam from '../../Home/ReviewItam/ReviewItam';
import OrderReview from '../OrderReview/OrderReview';
import Pay from '../Pay/Pay';

const DashboardHome = () => {
    return (
        <div>
            
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
        <ReviewItam></ReviewItam>
        </Grid>
        <Grid item xs={6}>
       <Pay></Pay>
        </Grid>
        <Grid item xs>
        
        <OrderReview></OrderReview>
      
        </Grid>
      </Grid>
    </Box>
        </div>
    );
};

export default DashboardHome;