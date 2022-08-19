import Figure from 'react-bootstrap/Figure';

function FigureExample() {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://avatars.githubusercontent.com/u/90060162?v=4"
      />
      <Figure.Caption>
        My profile picture
      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;