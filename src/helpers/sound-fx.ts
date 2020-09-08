import { soundManager } from 'soundmanager2';
import Pizzacato from 'pizzicato';
import * as PIXI from 'pixi.js';
import {Howl, Howler} from 'howler';
Howler.html5 = true;
const loader = new PIXI.Loader();
const manifest = {
    coin: '/audio/coin.mp3',
    count: '/audio/count.mp3',
    sparkle: '/audio/sparkle.mp3'
}
   
let sounds ={};
for (let name in manifest) {
    loader.add(name, manifest[name]);
    sounds[name]= new Howl({
        src: [manifest[name]],
        // html5: true
      });
       
    // PIXI.Loader.shared.add(name, manifest[name]);
}


let enabled = true;
// loader.add('coin', './audio/coin.mp3');
// loader.add('count', './audio/count.mp3');
// loader.add('sparkle', './audio/sparkle.mp3');
// loader.add('silence', './audio/silence.mp3');

// loader.load((loader, resources) => {
//     console.log('respources loaded', resources);
//     sounds = resources;
// })
// var SoundFX = require('sound-fx');
// var sfx = new SoundFX(); 

// const coin = sfx.load('./audio/coin.mp3', 'coin');
// const count = sfx.load('./audio/count.mp3', 'count');
// const sparkle = sfx.load('./audio/sparkle.mp3', 'sparkle');
// const silence = sfx.load('./audio/silence.mp3', 'silence');

// // const { soundManager } = new soundmanager();
// 
// sounds = {
//     coin,
//     count, 
//     sparkle,
//     silence
// }
// soundManager.onready(function ()
// {
//     var coin = soundManager.createSound({
//         url: './audio/coin.mp3'
//     });
    
//     var count = soundManager.createSound({
//         url: './audio/count.mp3',
//         autoLoad: true
//     });
//     var sparkle = soundManager.createSound({
//         url: './audio/sparkle.mp3'
//     });
//     var silence = soundManager.createSound({
//         url: './audio/silence.mp3'
//     });
//     sounds = {
//         coin,
//         count, 
//         sparkle,
//         silence
//     }
// });

function enable() {
    enabled = true;
    play('coin');
    // for(const prop in sounds) {
    //     sounds[prop].load();

    // }
}

function playAll() {
    for(const prop in sounds) {
        sounds[prop].play();
    }
}


function disable() {
    enabled = false
}

// function play(audio: 'coin' | 'count' | 'sparkle' | 'silence')
function play(audio, newInstance)
{
    if(newInstance && enabled) {
        const s =  new Howl({
            src: manifest[audio],
            // volume: 200,
            // html5: true,
            onend: () => {
                s.unload()
            }
          });
          s.play()
          return s;
    } else if (enabled && sounds && sounds[audio]) {
        const sound = sounds[audio];
        console.log(sound);
        if(!sound.playing()) {
            const volume = sound.volume || 100;
            sound.play()
        }
        return sound;
        
    }
}

// function stop(audio: 'coin' | 'count' | 'sparkle' | 'silence' | undefined)
function stop(audio)
{

}

export function fadeOut(sound, duration, callback)
{
    duration = duration || 1;
    duration = duration * 1000;]
    const originalVolume = sound.volume();
    console.log(duration);
    if (enabled ) {
        sound.fade(1, 0, duration);
        sound.once('fade', function(){
            console.log(sound.volume())
            sound.stop();
            sound.volume(originalVolume);
		});
    }

}

function soundFx()
{
    console.log('hello sound-fx');
}
module.exports = {
    play,
    enable,
    disable,
    fadeOut,
    playAll
};