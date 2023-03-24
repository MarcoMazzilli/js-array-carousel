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

//Il BtnPrev di default è nascosto
btnPrev.classList.add("hide")



//Al click il counter si incrementa o decrementa e lavora sulla classe "hide"

btnNext.addEventListener('click', function(){
  tutteLeImmagini[CounterImage].classList.add('hide');
  CounterImage++
  tutteLeImmagini[CounterImage].classList.remove('hide');
  
  //al click mostro il btnPrev
  btnPrev.classList.remove("hide");
  if (CounterImage === imageList.length - 1){
    btnNext.classList.add("hide")}
})


btnPrev.addEventListener('click', function(){
  tutteLeImmagini[CounterImage].classList.add('hide');
  CounterImage--
  tutteLeImmagini[CounterImage].classList.remove('hide');

  //al click mostro di nuovo il btnNext
  btnNext.classList.remove("hide");
  //e se arrivo all'inizio dell'array decrementando il contatore, nascondo il btnPrev
  if (CounterImage == 0){
    btnPrev.classList.add("hide")
  }
})



