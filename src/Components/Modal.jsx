import './Modal.css'
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
  
        <div className={show ? 'modal' : 'close'} show={show} onHide={handleClose}>
            <div>
                {props.cuerpo}
            </div>
            <button className={show ? 'closeButton' : 'close'} onClick={handleClose}>
              Close ❌
            </button>
        </div>
      </>
     );
}
 
export default Modall;