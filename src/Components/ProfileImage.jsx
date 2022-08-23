import Figure from 'react-bootstrap/Figure';
import './ProfileImage.css'

function FigureExample() {
  return (
    <Figure>
      <Figure.Image
      className='imgg'
        width={171}
        height={180}
        alt="171x180"
        src="https://avatars.githubusercontent.com/u/90060162?v=4"
      />
      <Figure.Caption >
       <h2>Alfonso Scornavacca</h2> 
      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;