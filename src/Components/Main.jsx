import React from 'react';
import './Main.css'
import Secondary from './Secondary';
import Modall from './Modal';
import Others from './Others';
import FigureExample from './ProfileImage';
import photoMain from '../Images/foto.jpg'



function Main () {
    
    return ( 
    <div className="main">
        <div className='main-img'>
                <FigureExample  width={171} height={180} image={photoMain}/>
            <div className='cards-container'>
                <div className='main-data'>
                    <div className='data-1'>
                        <div className='data-2'>
                            <h4>Name :</h4>
                            <p>Alfonso Scornavacca</p>
                        </div>
                        <div className='data-2'>
                            <h4>Age :</h4>
                            <p>33 Years old</p>
                        </div>
                        <div className='data-2'>
                            <h4>Country :</h4>
                            <p>Argentina</p>
                        </div>
                        <div className='data-2'>
                            <h4>English Level :</h4>
                            <p>Mid level</p>
                        </div>
                    </div>
                    <div className='data-1'>
                        <div className='data-2'>
                            <h4>Career :</h4>
                            <p>Senior programming technician</p>
                        </div>
                        <div className='data-2'>
                            <h4>Institute :</h4>
                            <p>Teclab</p>
                        </div>
                        <div className='data-2'>
                            <h4>Work experience :</h4>
                            <p>1 year in IT companies</p>
                        </div>
                        <div className='data-2'>
                            <h4>Current Company :</h4>
                            <p>Raona</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        <div className='buttons'>
        <div className='modal'>
          <Modall boton='Main Skills ' cuerpo={<Secondary />}/>
        </div>
        <div className='modal'>
          <Modall boton='Other Skills ' cuerpo={<Others />}/>
        </div>
      </div>               
    </div>
    );
}
 
export default Main;