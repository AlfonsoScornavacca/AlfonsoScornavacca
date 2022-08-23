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
                    <Cards clase='js' title='JavaScript' img={jsLogo}/>
                    <Cards clase='css' title='CSS 3' img={cssLogo}/>
                    <Cards clase='html' title='HTML 5' img={htmlLogo}/>
                </div>
                <div id='cards-container-two'>
                    <Cards clase='css' title='React' img={reactLogo}/>
                    <Cards title='Node' img={nodeLogo}/>
                    <Cards title='Bootstrap' img={bootstrapLogo}/>
                </div>
            </div>
            
     );
}
 
export default Secondary;