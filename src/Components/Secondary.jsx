import './Secondary.css'
import React from 'react';
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
                    <Cards   width={148} height={150} years='Exp: 2 Years' clase='js' title='JavaScript' iimg={jsLogo}/>
                    <Cards width={148} height={150} years='Exp: 2 Years' clase='css' title='CSS 3' iimg={cssLogo}/>
                    <Cards width={148} height={150} years='Exp: 2 Years' clase='html' title='HTML 5' iimg={htmlLogo}/>
                </div>
                <div id='cards-container-two'>
                    <Cards width={148} height={150} years='Exp: 1.5 Years' clase='react' title='React' iimg={reactLogo}/>
                    <Cards width={148} height={150} years='Exp: 1.5 Years' clase='node' title='Node' iimg={nodeLogo}/>
                    <Cards width={148} height={150} years='Exp: 2 Years' clase='bootstrap' title='Bootstrap' iimg={bootstrapLogo}/>
                </div>
            </div>
            
     );
}
 
export default Secondary;