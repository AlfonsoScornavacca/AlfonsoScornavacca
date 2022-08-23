import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Card className="text-center">
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Title>{props.years}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <div className={props.clase}>
        <Card.Img 
        width={171}
        height={180}
        src={props.img} />
        </div>
        <br></br>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default Cards;