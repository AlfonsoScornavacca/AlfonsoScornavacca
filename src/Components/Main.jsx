import './Main.css'
import FigureExample from './ProfileImage';


function Main () {
    
    return ( 
            <div className="main">
                <div className='main-img'>
                <FigureExample text='Alfonso Scornavacca' width={171} height={180} image="https://avatars.githubusercontent.com/u/90060162?v=4"/>
                <div className='cards-container'>
                  <div className='main-data'>
                    </div>  
                </div>
                </div>               
            </div>
     );
}
 
export default Main;