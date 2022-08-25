import React from 'react';
import Card from 'react-bootstrap/Card';
import './Cards.css';

function Cards(props) {
  return (
    <Card className="text-center">
      <Card.Header className='title'>{props.title}</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text className='description'>
          {props.description}
        </Card.Text>
        <div className={props.clase}>
        <Card.Img 
        width={148}
        height={150}
        src={props.img} />
        </div>
      </Card.Body>
      <Card.Footer className="years">{props.years}</Card.Footer>
    </Card>
  );
}

export default Cards;