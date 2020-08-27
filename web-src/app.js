import React, { useEffect, useState } from 'react';
import Config from './config';
import Socket from './socket/index';

import './app.scss';

import Dice from './dice';

function App() {
    const [socket, setSocket] = useState({});
    const [connectionDetails, setConnectionDetails] = useState({});

    useEffect(() => {
        Config.getConfig().then(config => {
            if(config.socketUrl) {
                const socket = new Socket(config.socketUrl);
                socket.on('connected', (id) => {
                    setConnectionDetails({
                        id,
                        status: socket.status
                    })
                });
                setSocket(socket);
            }
        })

    }, []);


    return (
        <div className="app">
            <div>
                <span className="status">{connectionDetails.status}</span> with
                connection ID <span className="id">{connectionDetails.id}</span>
            </div>
            <Dice socket={socket}/>
        </div>
    )
}

module.exports = App;