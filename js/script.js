// //make button use JavaScript
// const RandomColor = document.createElement('button')
// const textButton = document.createTextNode('Random Color')
// RandomColor.appendChild(textButton)
// RandomColor.setAttribute('type', 'button')
// ChangeColor.after(RandomColor)
// RandomColor.addEventListener('click', function(){
//     const red = Math.round(Math.random()*255+1);
//     const green = Math.round(Math.random()*255+1);
//     const blue = Math.round(Math.random()*255+1);
//     document.body.style.backgroundColor = 'rgb('+ red +', '+ green +', '+ blue +')';
// })

const changeBlue = document.getElementById('changeBlue')
const changeGreen = document.getElementById('changeGreen')
const changeRed = document.getElementById('changeRed')
const changeRandom = document.getElementById('changeRandom')

changeBlue.onclick = function(){
    const divBlue = document.getElementById('blue')
    divBlue.classList.toggle('intoBlue')
}
changeGreen.onclick = function(){
    const divGreen = document.getElementById('green')
    divGreen.classList.toggle('intoGreen')
}
changeRed.onclick = function(){
    const divRed = document.getElementById('red')
    divRed.classList.toggle('intoRed')
}
changeRandom.onclick = function(){
    const divRandom = document.getElementById('random')
    const red = Math.round(Math.random()*255+1);
    const green = Math.round(Math.random()*255+1);
    const blue = Math.round(Math.random()*255+1);
    divRandom.style.backgroundColor = 'rgb('+ red +', '+ green +', '+ blue +')';
}
