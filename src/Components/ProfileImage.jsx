import Figure from 'react-bootstrap/Figure';
import './ProfileImage.css'

function FigureExample(props) {
  return (
    <Figure>
      <Figure.Image
      className='imgg'
        width={props.width}
        height={props.height}
        alt="171x180"
        src={props.image}
      />
      <Figure.Caption >
       <h2>{props.text}</h2> 
      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;