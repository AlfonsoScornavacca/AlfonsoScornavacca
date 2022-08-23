import './Main.css'
import FigureExample from './ProfileImage';
import Cards from './Cards';
import jsLogo from '../Images/javascriptLogo.png'
import cssLogo from '../Images/cssLogo.png'
import htmlLogo from '../Images/htmlLogo.png'


function Main () {
    
    return ( 
            <div className="main">
                <FigureExample />
                <div id='cards-container'>
                    <Cards img={jsLogo}/>
                    <Cards img={cssLogo}/>
                    <Cards img={htmlLogo}/>
                </div>
            </div>
     );
}
 
export default Main;