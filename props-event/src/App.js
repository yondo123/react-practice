import { useState } from 'react';
import './App.css';
import Time from './Time';

function App() {
    const [color, setColor] = useState('App');

    const today = function () {
        return new Date().toISOString();
    };

    const onChangeBackground = function (params) {
        setColor(params);
    };

    return (
        <div className={color}>
            <header className="App-header">
                <Time today={today()} onChangeBackground={onChangeBackground} />
            </header>
        </div>
    );
}
export default App;
