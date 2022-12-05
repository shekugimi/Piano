const key = document.querySelectorAll('.btns');
volume = document.querySelector('.volume-slider');
const check = document.querySelector('#show-key');

audio = new Audio("tune/a.wav");

const playTune = (key) => {
    audio.src = `tune/${key}.wav`;
    audio.play();
    console.log(key);

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("btns-active");
    setTimeout(() => {
        clickedKey.classList.remove("btns-active");
    }, 150)
}


key.forEach(key => {
    key.addEventListener('click', () => playTune(key.innerHTML));

})

const pressedKey = (e) => {
    const allKey = "asdfghjkl;wetyuop";
    if (allKey.includes(e.key)) {
        playTune(e.key);
    } else {
        console.log(e.key);
    }
}

const handleVolume = (e) => {
    audio.volume = e.target.value;
    console.log(e.target.value);
}

const showHideKey = () => {

    key.forEach((e) => {
        if (e.style.color == "transparent") {
            e.style.color = "orangered";
        } else {
            e.style.color = "transparent"
        }
    }
    );

    // key.innerHTML = "";

    console.log("Check clicked")
}

volume.addEventListener("input", handleVolume)
check.addEventListener("change", showHideKey)
document.addEventListener("keydown", pressedKey);