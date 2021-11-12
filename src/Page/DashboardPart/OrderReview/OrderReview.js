import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const OrderReview = () => {
    const {user} = useAuth();
    const [order, setOrder] = useState([]);

    useEffect( () => {
        const uri = `https://guarded-beach-94669.herokuapp.com/oder?email=${user.email}`;
        fetch(uri)
        .then(res => res.json())
        .then(data => setOrder(data))

    } , [])

    return (
        <div>
            <h1> Oders Review </h1>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Price</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.displayName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default OrderReview;