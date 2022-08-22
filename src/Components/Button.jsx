import './Button.css'
function Buttons (props)  {
    return ( 
        <button id={props.variante}  >{ props.text }</button>
     );
}
 
export default Buttons;