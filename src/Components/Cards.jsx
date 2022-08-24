import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Card className="text-center">
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <div className={props.clase}>
        <Card.Img 
        width={148}
        height={150}
        src={props.img} />
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">{props.years}</Card.Footer>
    </Card>
  );
}

export default Cards;