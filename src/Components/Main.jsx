import './Main.css'
import FigureExample from './ProfileImage';
import Buttons from './Button';
function Main () {

    return ( 
            <div className="main">
                <FigureExample />
                <Buttons variante='rojo' text='Hola'></Buttons>
                <Buttons variante='azul' text='Hola'></Buttons>
            </div>
     );
}
 
export default Main;