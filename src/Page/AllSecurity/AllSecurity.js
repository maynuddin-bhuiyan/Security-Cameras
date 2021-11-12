import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const AllSecurity = (props) => {
  const { name, degeneration, price, img, _id } = props.cameras;


  const history = useHistory();


  const hendealClicke = (id) => {
    const uri = `/order/${_id}`;
    history.push(uri);
    console.log(uri);

  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {degeneration}
          </Card.Text>
          <p>{price}<span>$</span></p>
          <Button 
          variant="primary" 
          onClick={hendealClicke}>
            Order Now
          </Button>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllSecurity;