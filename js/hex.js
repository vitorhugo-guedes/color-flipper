const hexadecimal = [0, 1 , 2, 3, 4, 5, 6, 7, 8 , 9, "A", "B", "C", "D", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hexadecimal[randomNumber(hexadecimal)];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function randomNumber(arg){
    return Math.floor(Math.random() * arg.length)
}

