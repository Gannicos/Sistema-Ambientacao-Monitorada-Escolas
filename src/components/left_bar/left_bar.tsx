import './left_bar.css';
import LeftIcon from './left_icon';

export default function left_bar(){

    return(
        <div className="left-bar-container">
            <div className="left-bar-guide-icons">
                <p className='guide-container'><LeftIcon value="Home"/></p>
                <p className='guide-container'><LeftIcon value="Map"/></p>
                <p className='guide-container'><LeftIcon value="News"/></p>
            </div>
            <div className="left-bar-hover">
                <LeftIcon value="Close" />
            </div>
        </div>
            
    );
}
