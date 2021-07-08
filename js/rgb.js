const btn = document.getElementById('btn');
const showColor = document.querySelector('.color');

btn.addEventListener('click', () =>{
    let color = [];
    for(var i = 0; i < 2; i++){
       color += generateRandom(0, 255);
    }
    showColor.textContent = color;
    document.body.style.backgroundColor = color;
})


//gera um numero entre intervalos e inclui os intervalos.
function generateRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
