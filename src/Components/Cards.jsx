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
        onClick={props.click}
        width={props.width}
        height={props.height}
        src={props.iimg} />
        </div>
      </Card.Body>
      <Card.Footer className="years">{props.years}</Card.Footer>
    </Card>
  );
}

export default Cards;