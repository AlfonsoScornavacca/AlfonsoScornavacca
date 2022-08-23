import './Main.css'
import FigureExample from './ProfileImage';
import Cards from './Cards';
import Button from 'react-bootstrap/Button';
function Main () {

    return ( 
            <div className="main">
                <FigureExample />
                <div id='cards-container'>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div>
                <Button variant="primary">Go somewhere</Button>
            </div>
     );
}
 
export default Main;