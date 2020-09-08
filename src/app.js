import React, { useEffect, useState } from 'react';
import Config from './config';
import Socket from './socket/index';
import ToolBox from './components/tool-box';

import './app.scss';

import Dice from './dice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

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
        <React.Fragment>
             <ToolBox />
            <ToastContainer />
        </React.Fragment>
        
    )
}

module.exports = App;