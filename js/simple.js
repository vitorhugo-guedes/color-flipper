const colors = ["blue", "red", "green", "brown", "pink", "orange", "yellow", "gray", "darkgray", "aqua", "aquamarine", "skyblue"];
const btn = document.getElementById('btn');
const showColor = document.querySelector('.color');

btn.addEventListener('click', () =>{
    let color = '';
    for(let i = 0; i < 1; i++){
        color = colors[randomNumber(colors)];
    }
    showColor.textContent = color;
    document.body.style.backgroundColor = color;
})

function randomNumber(arg){
    return Math.floor(Math.random() * arg.length)
}
