// BOTTONI NEXT & PREV
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
//Contenitore immagini
const carouselContainer = document.querySelector(".carousel-container");
const carouselContainerSmall = document.querySelector(".carousel-container-small");

const imageList = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
]
let divOverlay;

//Il ciclo genera le immagini
for (let i = 0; i < imageList.length; i++) {

  let image = imageList[i];

  carouselContainer.innerHTML += `<img src="${image}" class="hide">`


  //Per generare le immagini nel container piccolo
  const imageBoxSmall = document.createElement("div");

  carouselContainerSmall.append(imageBoxSmall);
  imageBoxSmall.classList.add("imageBoxSmall")
  
  const divOverlay = document.createElement("div")
  divOverlay.classList.add("overlay")

  imageBoxSmall.innerHTML += `  <img src="${image}">`;
  imageBoxSmall.append(divOverlay)

}


//Recupero tutta la lista delle immagini e tolgo la classe ".hide" alla prima
let CounterImage = 0;

const tutteLeImmagini = document.querySelectorAll(".hide");
tutteLeImmagini[CounterImage].classList.remove("hide");

//Recupero tutta la lista degli overlay e tolgo la classe ".overlay" al primo.

const listaOverlay = document.querySelectorAll(".overlay")
listaOverlay[CounterImage].classList.remove("overlay")



//Il BtnPrev di default è nascosto
btnPrev.classList.add("hide")


//Al click il counter si incrementa o decrementa e lavora sulla classe "hide"

btnNext.addEventListener('click', function(){

  tutteLeImmagini[CounterImage].classList.add('hide');
  listaOverlay[CounterImage].classList.remove("overlay");

  CounterImage++

  tutteLeImmagini[CounterImage].classList.remove('hide');
  listaOverlay[CounterImage].classList.add("overlay");


  btnPrev.classList.remove("hide");
  if (CounterImage === imageList.length - 1){
    btnNext.classList.add("hide")}
})


btnPrev.addEventListener('click', function(){

    tutteLeImmagini[CounterImage].classList.add('hide');
    listaOverlay[CounterImage].classList.remove("overlay");
  
    CounterImage--
    
    tutteLeImmagini[CounterImage].classList.remove('hide');
    listaOverlay[CounterImage].classList.add("overlay");
  
  
    //al click mostro di nuovo il btnNext
    btnNext.classList.remove("hide");
    //e se arrivo all'inizio dell'array decrementando il contatore, nascondo il btnPrev
    if (CounterImage == 0){
      btnPrev.classList.add("hide")
    }
})



