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
  });
}

function increment(i, max, element) {
  if (i > max) {
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

if (jaAnimou === 0) {
  window.addEventListener("scroll", debounce(function () {
      if (jaAnimou === 0) animeScroll();
      else return;
      console.log("entra aqui mil vezes");
      console.log(jaAnimou);
  }, 200));
}

// filtro do portifólio
const botaoPort = document.querySelectorAll(".filter-btn");
const projectBox = document.querySelectorAll(".project-box");

botaoPort.forEach((botao, i) => {
    console.log("clicou no ativo");
    botao.addEventListener("click", function (event) {
        botaoPort.forEach(b => {
            b.classList.remove("active");
        })
        botao.classList.add("active")
        const idAtivo = event.target.id
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
    }, 60);
}

function mudouTamanho(){
  const circulos = document.querySelectorAll(".circle-mobile")
  var largura = window.screen.width;
  if(largura < 375){
    circulos.forEach(element => {
      element.setAttribute('cx', '63');
      element.setAttribute('cy', '63');
      element.setAttribute('r', '63');
    });
  }
  else{
    circulos.forEach(element => {
      element.setAttribute('cx', '70');
      element.setAttribute('cy', '70');
      element.setAttribute('r', '70');
    });
  }
}
mudouTamanho()