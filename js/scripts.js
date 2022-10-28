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

window.onload = function go() {
    var circle = document.querySelectorAll(".circleProgress");
    let cont = 1.1
    circle.forEach((element, i) => {
        element.style.strokeDashoffset = 0;
        circle[i+1].style.setProperty("transition-duration", `${cont}s`);
        cont *=1.7

    })
}