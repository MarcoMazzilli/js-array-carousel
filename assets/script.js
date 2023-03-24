// BOTTONI NEXT & PREV
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
//Contenitore immagini
const carouselContainer = document.querySelector(".carousel-container");

const imageList = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
]

//Il ciclo genera le immagini
for (let i = 0; i < imageList.length; i++) {

  let image = imageList[i];

  console.log(image)

  carouselContainer.innerHTML += `<img src="${image}" class="hide">`
}

//Recupero tutta la lista delle immagini e tolgo la classe ".hide" alla prima

const tutteLeImmagini = document.querySelectorAll(".hide");

let CounterImage = 0;
tutteLeImmagini[CounterImage].classList.remove("hide");



//Al click il counter si incrementa o decrementa e lavora sulla classe "hide"

btnNext.addEventListener('click', function(){
  tutteLeImmagini[CounterImage].classList.add('hide');
  CounterImage++
  tutteLeImmagini[CounterImage].classList.remove('hide');
})

btnPrev.addEventListener('click', function(){
  tutteLeImmagini[CounterImage].classList.add('hide');
  CounterImage--
  tutteLeImmagini[CounterImage].classList.remove('hide');
})


