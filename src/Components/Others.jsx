import React from 'react';
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
                    <Cards width={148} height={150} years='Exp: 6 Months' clase='css' title='PowerApp' iimg={powerappLogo}/>
                    <Cards width={148} height={150} className='powerautomate' years='Exp: 6 Months' clase='html' title='Automate' iimg={powerAutomateLogo}/>
                    <Cards width={148} height={150} years='Exp: 6 Months' clase='js' title='SharePoint' iimg={sharePointLogo}/>
                </div>
                <div id='cards-container-two'>
                    <Cards width={148} height={150} years='Exp: 1.5 Years' clase='node' title='Git' iimg={gitLogo}/>
                    <Cards width={148} height={150} years='Exp: 6 Months' clase='bootstrap' title='Azure' iimg={azureLogo}/>
                    <Cards width={148} height={150} years='Exp: 6 Months' clase='react' title='Terraform' iimg={terraformLogo}/>
                </div>
            </div>
            
     );
}
 
export default Others;