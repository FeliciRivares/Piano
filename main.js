const whiteKeys = [...document.querySelectorAll('path.white-keys')];
const blackKeys = [...document.querySelectorAll('path.black-keys')];
const keys = [...whiteKeys, ...blackKeys];

let audio;
const playAudio = (keyPlayedNow) => {
    if(audio){
        audio.pause()
        audio.currentTime = 0;
    }
    audio = new Audio(`audio/${keyPlayedNow}.mp3`);
    audio.play();
}

keys.forEach((key, i) => {
    key.dataset.index = i + 1; 

    key.addEventListener('click', (e) =>{
        const specificKey = e.target.dataset.index;
        playAudio(specificKey)
    })
});