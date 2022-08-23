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
                    <Cards img={jsLogo}/>
                    <Cards img={cssLogo}/>
                    <Cards img={htmlLogo}/>
                </div>
                <div id='cards-container'>
                    <Cards img={reactLogo}/>
                    <Cards img={nodeLogo}/>
                    <Cards img={bootstrapLogo}/>
                </div>
            </div>
            
     );
}
 
export default Secondary;