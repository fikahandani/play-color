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

const sliderRed = document.querySelector('input[name=sliderRed]')
const sliderGreen = document.querySelector('input[name=sliderGreen]')
const sliderBlue = document.querySelector('input[name=sliderBlue]')

sliderRed.addEventListener('input', function(){
    const vRed = sliderRed.value;
    const vGreen = sliderGreen.value;
    const vBlue = sliderBlue.value;
    const setRange = document.getElementById('slider')
    setRange.style.backgroundColor = 'rgb('+ vRed +', '+ vGreen +', '+ vBlue +')';
})

sliderGreen.addEventListener('input', function(){
    const vRed = sliderRed.value;
    const vGreen = sliderGreen.value;
    const vBlue = sliderBlue.value;
    const setRange = document.getElementById('slider')
    setRange.style.backgroundColor = 'rgb('+ vRed +', '+ vGreen +', '+ vBlue +')';
})

sliderBlue.addEventListener('input', function(){
    const vRed = sliderRed.value;
    const vGreen = sliderGreen.value;
    const vBlue = sliderBlue.value;
    const setRange = document.getElementById('slider')
    setRange.style.backgroundColor = 'rgb('+ vRed +', '+ vGreen +', '+ vBlue +')';
})
document.body.addEventListener('mousemove', function(e){
    const x = Math.round((e.clientX / window.innerWidth)*255)
    const y = Math.round((e.clientY / window.innerHeight)*255)
    const setColor = document.getElementById('mouse')
    setColor.style.backgroundColor = 'rgb('+ x +', '+ y +', 100)';
})