const lyrics = [
    { text: "That song is brought to you by", speed: 35 },
    { text: " Conversations", speed: 100 },
    { text: " Na hindi na maisalba pa" , speed: 100 },
    { text: " Time check?", speed: 100 },
    { text: " Oras na po", speed: 120 },
    { text: " Para bumitaw ka😭", speed: 100 }, 
];

const delays = [0, 20, 100, 150, 150]; 

function animateText(text, speed) {
    return new Promise(resolve => {
        const element = document.getElementById('lyrics');
        let index = 0;
        const interval = setInterval(() => {
            element.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
                resolve();
            }
        }, speed);
    });
}

function singLyrics(lyric, delay) {
    return new Promise(resolve => {
        setTimeout(async () => {
            await animateText(lyric.text, lyric.speed);
            resolve();
        }, delay);
    });
}

async function singSong() {
    for (let i = 0; i < lyrics.length; i++) {
        await singLyrics(lyrics[i], delays[i]);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    singSong();
});
