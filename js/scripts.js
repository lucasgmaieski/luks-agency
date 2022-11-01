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

const circleAnime = document.getElementById("data-area");
const circle = document.querySelectorAll(".circleProgress");
const counter = document.querySelectorAll(".counter");
let jaAnimou = 0;
function go() {
  let cont = 1;
  circle.forEach((element, i) => {
    increment(0, counter[i].getAttribute("value"), counter[i]);
    element.style.strokeDashoffset = 0;
    circle[i + 1].style.setProperty("transition-duration", `${cont}s`);
    cont *= 1.3;
    // console.log(counter[i].getAttribute('value'))
  });
}

function increment(i, max, element) {
  let time;
  if (i > max) {
    // clearTimeout(time)
    return;
  }
  setTimeout(function () {
    console.log("ele entra aqui mano ?");
    element.innerText = Math.round(i);
    if (i <= max) increment(i + max / 100, max, element);
  }, 11);
}

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function animeScroll() {
  // pegar a distancia da barra até o topo do site
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;
  console.log(windowTop);
  if (windowTop > circleAnime.offsetTop) {
    jaAnimou = 1;
    go();
  }
}
//Se ja animou um vez para de ficar ouvindo esse scrooll
if (jaAnimou === 0) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      if (jaAnimou === 0) animeScroll();
      else return;
      console.log("entra aqui mil vezes");
      console.log(jaAnimou);
    }, 200)
  );
}

// filtro do portifólio
const botaoPort = document.querySelectorAll(".filter-btn");
const projectBox = document.querySelectorAll(".project-box");

botaoPort.forEach((botao, i) => {
    // botao.classList.remove("active");
    console.log("clicou no ativo");
    botao.addEventListener("click", function (event) {
        botaoPort.forEach(b => {
            b.classList.remove("active");
            console.log("entra aquiaaaaaaaaaaaaa")
        })
        botao.classList.add("active")
        const idAtivo = event.target.id
        console.log(idAtivo)
        if(idAtivo == 'dsg-btn'){
            eachBoxes('dsg', projectBox)
        } else if(idAtivo == 'dev-btn'){
            eachBoxes('dev', projectBox)
        } else if(idAtivo == 'seo-btn'){
            eachBoxes('seo', projectBox)
        } else{
            console.log(projectBox)
            eachBoxes('all', projectBox)
        }
    

        
        console.log("clicou no ativo");
        console.log(botao);
        console.log(botaoPort[i]);
        console.log(i);
    });
});

function eachBoxes(type, boxes){
    
        boxes.forEach(function(box){
            if(type == 'all'){
                fadeIn(box)
            }
            else if(!box.classList.contains(type)){
                // box.fadeOut('slow')
                fadeOut(box)
                console.log(box)
            }else {
                fadeIn(box)
            }
        })
}

function fadeIn(box) {
    box.style.display = 'block'
    box.style.opacity = 1;
}

function fadeOut(box) {
    
    var opacity = 1;
    var intervalID = setInterval(function() {

        if (opacity > 0) {
            opacity = opacity - 0.10
            box.style.opacity = opacity;
        } else {
            setTimeout(function(){
                box.style.display = 'none'
                clearInterval(intervalID);
            }, 65)
            
        }
        console.log("ele passa aqui no final do fade?")
    }, 60);
}