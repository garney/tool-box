import React, { useState, useEffect } from 'react';
import './component-tester.scss';
import { play, enable, disable, fadeOut, playAll } from '../../helpers/sound-fx';

export default function AudioTester()
{
    const [timer, setTimer] = useState(undefined);
    
    const [count, setCount] = useState(0);
    return (
    <div className="component-tester">
        <button onClick={() => {
            enable()
            play('coin', true);
           
        }}>Enable</button>
        <button onClick={() => {
            enable()
            play('coin');
            setTimer(setInterval(() => {
                play('coin', true);
            }, 1000));
        }}>Coin repeat</button>

        <button onClick={() => {
            clearInterval(timer);
            setTimer(null);
            disable();
        }}>stop</button>

        <button onClick={() => {
            const sound = play('count');
            console.log(sound);
            setTimeout(() => {
                console.log('fade', sound)
                fadeOut(sound, 0.75); 
            }, 500)
            // fadeOut('count', 0.75);
        }}>Count</button>


        <button onClick={() => {
            playAll();
            // fadeOut('count', 0.75);
        }}>PLay All</button>
    </div>)
}