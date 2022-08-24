import './Main.css'
import FigureExample from './ProfileImage';


function Main () {
    
    return ( 
            <div className="main">
                <FigureExample text='Alfonso Scornavacca' width={171} height={180} image="https://avatars.githubusercontent.com/u/90060162?v=4"/>
                <div id='cards-container'>
                </div>
            </div>
     );
}
 
export default Main;