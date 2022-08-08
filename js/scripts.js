(function(){
/* Nav */
const isActive = document.querySelector('#navHamburger')
const isVisible = document.querySelector('#navigation')
let active = 0

isActive.onclick = () => {
  if(active == 0){
    isActive.className += ' isActive' 
    isVisible.className += ' isVisible'
    active = 1
  }else{
    isActive.classList.remove('isActive')
    isVisible.classList.remove('isVisible')
    active = 0
  }
}

/* Slider */
const sliders = [...document.querySelectorAll('.hero__slider__body')];
const buttonNext = document.querySelector('#next');
const buttonBefore = document.querySelector('#before');
let value;   

buttonNext.addEventListener('click', ()=>{
    changePosition(1);
});

buttonBefore.addEventListener('click', ()=>{
    changePosition(-1);
});

const changePosition = (add)=>{
    const currentTestimony = document.querySelector('.hero__slider__body--show').dataset.id;
    value = Number(currentTestimony);
    value+= add;


    sliders[Number(currentTestimony)-1].classList.remove('hero__slider__body--show');
    if(value === sliders.length+1 || value === 0){
        value = value === 0 ? sliders.length  : 1;
    }

    sliders[value-1].classList.add('hero__slider__body--show');

}

/*question */
const titleQuestions = [...document.querySelectorAll('.questions__title')];
console.log(titleQuestions)

titleQuestions.forEach(question =>{
    question.addEventListener('click', ()=>{
        let height = 0;
        let answer = question.nextElementSibling;
        let addPadding = question.parentElement.parentElement;

        addPadding.classList.toggle('questions__padding--add');
        question.children[0].classList.toggle('questions__arrow--rotate');

        if(answer.clientHeight === 0){
            height = answer.scrollHeight;
        }

        answer.style.height = `${height}px`;
    });
});

/*testimony*/
const testimonies = [...document.querySelectorAll('.testimony__body')];
const testimoniesNext = document.querySelector('#nextTestimonies');
const testimoniesBefore = document.querySelector('#beforeTestimonies');
let testimoniesValue;   

testimoniesNext.addEventListener('click', ()=>{
    testimoniesChangePosition(1);
});

testimoniesBefore.addEventListener('click', ()=>{
    testimoniesChangePosition(-1);
});

const testimoniesChangePosition = (add)=>{
    const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
    value = Number(currentTestimony);
    value+= add;


    testimonies[Number(currentTestimony)-1].classList.remove('testimony__body--show');
    if(value === testimonies.length+1 || value === 0){
        value = value === 0 ? testimonies.length  : 1;
    }

    testimonies[value-1].classList.add('testimony__body--show');

}

/*floatTop */
const header = document.querySelector('header');
const navTop = document.querySelector('#goTop');
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0);
  navTop.classList.toggle('go-navtop', window.scrollY > 100)
})

/*suscription */
const btnSuscription = document.querySelector('.action-y')
const showSuscription = document.querySelector('.hidden-y')
const btnCloseSuscription = document.querySelector('.suscription__btnclose')

btnSuscription.onclick = () =>{
  showSuscription.className += ' visible-y'
}
btnCloseSuscription.onclick = () =>{
  showSuscription.classList.remove('visible-y')
}

/*form Suscription */

const email = document.querySelector('#email')
const res = document.querySelector('.suscription__res')
const form = document.querySelector('#form')

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  if(email.value === null || email.value === '') {
    res.innerHTML = 'Ingresa tú Correo'
    res.className += ' fail'
    res.classList.remove('success')
    res.style.display = "block"
    return false
  }
  res.innerHTML = '¡Felicidades! se ha suscrito a nuestra lista de ofertas'
  res.classList.remove('fail')
  res.className += ' success'
  res.style.display = "block"
})

})();