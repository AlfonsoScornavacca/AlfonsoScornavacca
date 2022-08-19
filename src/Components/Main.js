import './Main.css'
import Figure from 'react-bootstrap/Figure';


function Main () {
    return ( 
            <div className="main">
         <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
            </div>
     );
}
 
export default Main;