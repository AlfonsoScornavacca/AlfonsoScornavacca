import './Modal.css'
function Modal (props)  {
    return ( 
        <button id={props.variante}  >{ props.text }</button>
     );
}
 
export default Modal;