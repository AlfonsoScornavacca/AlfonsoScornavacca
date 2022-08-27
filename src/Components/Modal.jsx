import './Modal.css'
import React from 'react';
import { useState } from 'react';

function Modall (props)  {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( 
      <>
        <button className={show ? 'close' : 'closeButton'} onClick={handleShow}>
          {props.boton}
        </button>
        <button className={show ? 'closeButton' : 'close'} onClick={handleClose}>
           <span>Close </span>   
            </button>  
        <div className={show ? 'modal' : 'close'} show={show} onHide={handleClose}>
            <div>
                {props.cuerpo}
            </div>

        </div>
      </>
     );
}
 
export default Modall;