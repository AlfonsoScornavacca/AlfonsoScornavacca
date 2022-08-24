import './Footer.css'
import FigureExample from './ProfileImage';
function Footer ()  {
    return (  
        <div id='main'>
            <FigureExample text='LinkedIn' width={50} height={52} image="https://avatars.githubusercontent.com/u/90060162?v=4" />
            <FigureExample text='Instagram' width={50} height={52} image="https://avatars.githubusercontent.com/u/90060162?v=4" />
            <FigureExample text='GitHub' width={50} height={52} image="https://avatars.githubusercontent.com/u/90060162?v=4" />
            <FigureExample text='Twitter' width={50} height={52} image="https://avatars.githubusercontent.com/u/90060162?v=4" />
        </div>
    );
}
 
export default Footer;