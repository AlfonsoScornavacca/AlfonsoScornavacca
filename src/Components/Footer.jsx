import './Footer.css'
import FigureExample from './ProfileImage';
function Footer ()  {
    return (  
        <div id='main'>
            <FigureExample text='LinkedIn' width={50} height={52} image="https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg" />
            <FigureExample text='Instagram' width={50} height={52} image="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png" />
            <FigureExample text='GitHub' width={50} height={52} image="https://visualpharm.com/assets/720/Github-595b40b65ba036ed117d442f.svg" />
            <FigureExample text='Twitter' width={50} height={52} image="https://icons.veryicon.com/png/Internet%20%26%20Web/Basic%20Round%20Social/twitter.png" />
            <FigureExample text='WhatsApp' width={50} height={52} image="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
        </div>
    );
}
 
export default Footer;