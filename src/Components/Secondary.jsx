import './Secondary.css'
import Cards from './Cards';
import jsLogo from '../Images/javascriptLogo.png'
import cssLogo from '../Images/cssLogo.png'
import htmlLogo from '../Images/htmlLogo.png'
import bootstrapLogo from '../Images/bootstrapLogo.png'
import nodeLogo from '../Images/nodeLogo.png'
import reactLogo from '../Images/reactLogo.png'


function Secondary () {
    
    return ( 
            <div className="main">
                <div id='cards-container'>
                    <Cards years='Exp: 2 Years' clase='js' title='JavaScript' img={jsLogo}/>
                    <Cards years='Exp: 2 Years' clase='css' title='CSS 3' img={cssLogo}/>
                    <Cards years='Exp: 2 Years' clase='html' title='HTML 5' img={htmlLogo}/>
                </div>
                <div id='cards-container-two'>
                    <Cards years='Exp: 1.5 Years' clase='css' title='React' img={reactLogo}/>
                    <Cards years='Exp: 1.5 Years' clase='node' title='Node' img={nodeLogo}/>
                    <Cards years='Exp: 2 Years' clase='bootstrap' title='Bootstrap' img={bootstrapLogo}/>
                </div>
            </div>
            
     );
}
 
export default Secondary;