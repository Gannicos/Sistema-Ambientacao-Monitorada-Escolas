import { useRef, useState } from 'react';
import './left_bar.css';
import Icon from '../Icon/icon';

export default function LeftBar() {
    const [close, setClose] = useState(true);
    const closing = () => {
        setClose(!close);
    };

    return (
        <div className={`left-bar-container ${close ? 'collapsed' : ''}`}>
            <div className="left-bar-guide-icons">
                <p className="guide-container">
                    <button className="icon"><Icon value="Home" /></button>
                </p>
                <p className="guide-container">
                    <button className="icon"><Icon value="Map" /></button>
                </p>
                <p className="guide-container">
                    <button className="icon"><Icon value="News" /></button>
                </p>
            </div>
            <div className="guide-container">
                <button className="icon" onClick={closing}><Icon value={close ? 'Open' : 'Close'} /></button>
            </div>
        </div>
    );
}
