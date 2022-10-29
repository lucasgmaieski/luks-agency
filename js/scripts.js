// $(document).ready(function () {
// //Progress bar
//     let containerA = document.getElementById("circleA");

//     let circleA = new ProgressBar.Circle(containerA, {
//         color: '#64daf9',
//         strokeWidth: 8,
//         duration: 1400,
//         from: {color: '#AAA'},
//         to: { color: '#65daf9'},

//         step: function(state, circle) {
//             circleA.path.setAttribute('stroke', state.color);

//             let value = Math.round(circle,value() * 60 );
//             circleA.setText(value)
//         }
//     });

//     circleA.animate(1.0)
// });
// var ProgressBar = require('progressbar.min.js');

// window.onload = function () {
//     //Progress bar
//         let containerA = document.getElementById("circleA");
    
//         let circleA = new ProgressBar.Circle(containerA, {
//             color: '#64daf9',
//             strokeWidth: 8,
//             duration: 1400,
//             from: {color: '#AAA'},
//             to: { color: '#65daf9'},
    
//             step: function(state, circle) {
//                 circleA.path.setAttribute('stroke', state.color);
    
//                 let value = Math.round(circle.value() * 60 );
//                 circleA.setText(value)
//             }
//         });
    
//         circleA.animate(1.0);
//     }
const circleAnime = document.getElementById('data-area');
let jaAnimou = 0;
function go() {
    var circle = document.querySelectorAll(".circleProgress");
    let cont = 1.1
    circle.forEach( (element, i) => {
        element.style.strokeDashoffset = 0;
        circle[i+1].style.setProperty("transition-duration", `${cont}s`);
        cont *=1.7

    })
}
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    }
}


function animeScroll() {
    // pegar a distancia da barra até o topo do site
    const windowTop = window.pageYOffset + window.innerHeight*0.85;
    console.log(windowTop)
    if(windowTop > circleAnime.offsetTop){
        jaAnimou = 1;
        go();
    }
}
//Se ja animou um vez para de ficar ouvindo esse scrooll
if (jaAnimou === 0) {
        window.addEventListener('scroll',  debounce(function() {
            animeScroll();
            console.log("entra aqui mil vezes")
            console.log(jaAnimou)
        }, 200))
}