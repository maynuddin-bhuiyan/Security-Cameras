import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Security = (props) => {
  const { name, title, price, img, _id } = props.cameras;

  const hostery = useHistory();

  const hendealclick = (id) => {
    const uri = `/order/${_id}`;
    hostery.push(uri);
    console.log(uri);
  }
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {title}
          </Card.Text>
          <p>{price}<span>$</span></p>
          <Button onClick={hendealclick} variant="primary">Order Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Security;