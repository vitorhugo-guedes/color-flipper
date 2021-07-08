const btn = document.getElementById('btn');
const showColor = document.querySelector('.color');

btn.addEventListener('click', () =>{
    let color = generateRGB();
    showColor.textContent = color;
    document.body.style.backgroundColor = color;
})


//generate a random number and include the intervals.
function generateRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//More simple to show to the user
function generateRGB(){
    let r = generateRandom(0, 255);
    let g = generateRandom(0, 255);
    let b = generateRandom(0, 255);

    return `rgb(${r}, ${g}, ${b})`;
}