import React, { useState, useEffect } from 'react';
import './component-tester.scss';
export default function ComponentTester()
{
    soundManager.onready(function() {
        // SM2 is ready to go!
        var mySound = soundManager.createSound({
        url: '../mpc/audio/CHINA_1.mp3'
        });
        mySound.play();
    });
    const [count, setCount] = useState(0);
    return (<div className="component-tester">
        <input defaultValue={count} onChange={(event) => {
            setCount(parseInt(event.target.value));
        }} />
            Hello 
        <div className="counter counting">{count}</div>
    </div >)
}