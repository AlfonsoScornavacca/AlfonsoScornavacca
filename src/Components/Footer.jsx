import './Footer.css'
import FigureExample from './ProfileImage';
function Footer ()  {
    return (  
        <div id='main'>
            <FigureExample url='https://www.linkedin.com/in/alfonso-scornavacca/' width={50} height={52} image="https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg" />
            <FigureExample url='https://www.instagram.com/alfondrums/'  width={50} height={52} image="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png" />
            <FigureExample url='https://github.com/AlfonsoScornavacca?tab=repositories'  width={50} height={52} image="https://visualpharm.com/assets/720/Github-595b40b65ba036ed117d442f.svg" />
            <FigureExample url='https://twitter.com/AlfonDev'  width={50} height={52} image="https://icons.veryicon.com/png/Internet%20%26%20Web/Basic%20Round%20Social/twitter.png" />
            <FigureExample url='https://www.facebook.com/Alfon89' width={50} height={52} image="https://cdn.icon-icons.com/icons2/1109/PNG/512/1486053608-facebook_79182.png" />
        </div>
    );
}
 
export default Footer;