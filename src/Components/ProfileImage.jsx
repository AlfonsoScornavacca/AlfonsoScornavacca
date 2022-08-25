import Figure from 'react-bootstrap/Figure';
import './ProfileImage.css'

function FigureExample(props) {
  // eslint-disable-next-line no-unused-vars
  const openInNewTab = (url) => { const newWindow = window.open(url, '_blank', 'noopener,noreferrer') }
  return (
    <Figure >
      <Figure.Image
      className='imgg'
        width={props.width}
        height={props.height}
        alt="171x180"
        src={props.image}
        onClick={() => openInNewTab(props.url)}
      />
      <Figure.Caption >
       <h2>{props.text}</h2> 
      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;