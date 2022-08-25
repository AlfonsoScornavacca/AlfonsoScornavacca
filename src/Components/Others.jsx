import './Secondary.css';
import './Others.css';
import Cards from './Cards';
import powerappLogo from '../Images/powerapp.png'
import powerAutomateLogo from '../Images/PowerAutomate.png'
import sharePointLogo from '../Images/SharePoint.png'
import gitLogo from '../Images/git.png'
import azureLogo from '../Images/Azure.png'
import terraformLogo from '../Images/terraform.png'


function Others () {
    
    return ( 
            <div className="main">
                <div id='cards-container'>
                    <Cards years='Exp: 6 Months' clase='css' title='PowerApp' img={powerappLogo}/>
                    <Cards className='powerautomate' years='Exp: 6 Months' clase='html' title='Automate' img={powerAutomateLogo}/>
                    <Cards years='Exp: 6 Months' clase='js' title='SharePoint' img={sharePointLogo}/>
                </div>
                <div id='cards-container-two'>
                    <Cards years='Exp: 1.5 Years' clase='node' title='Git' img={gitLogo}/>
                    <Cards years='Exp: 6 Months' clase='bootstrap' title='Azure' img={azureLogo}/>
                    <Cards years='Exp: 6 Months' clase='react' title='Terraform' img={terraformLogo}/>
                </div>
            </div>
            
     );
}
 
export default Others;