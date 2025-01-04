
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if (navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if (navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
                /*remove menu mobile*/
const navlink = document.querySelectorAll('.nav__link')   

const linkAction = () =>{
    const navMenu= document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show menu//
    navMenu.classList.remove('show-menu')
}
navlink.forEach(n=> n.addEventListener('click',linkAction))

/*=======add shadow heaader========*/

const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('shadow-header')
                    :  header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)
/*========Swiper Popular========*/
const swiperPopular = new Swiper('.popular__swiper', {
   loop: true,
   grabCursor: true,
   slidesPerview:'auto',
   centredSlides:'auto',
  })
  /*====ScrollUp====*/
  const ScrollUp = ()=>{
    const ScrollUp = document.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
                    
  }
  window.addEventListener('scroll',scrollUp)

  /*=====ScrollSettings====*/
  const sections = document.querySelectorAll('section[id]')
  const scrollActive= () =>{
    const scrollDown = window.scrollY

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
           sectionTop = current.offsetTop -58,
           sectionId = current.getAttribute('id')
           sectionsClass = document.querySelector('.nav__menu a[href*='+sectionId+']')

        if(scrollDown > sectionTop && scrollDown<= sectionTop+sectionHeight) {
            sectionsClass.classList.add('activate-link')
        }else{
            sectionsClass.classList.remove('activate-link')
        }  
    }

    )
  }
           /*===ScrollReveal*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:300,
})
sr.reveal('.home__data .popular__container')
sr.reveal('.home__board',{delay:700, distance:'100px',origin:'right'})
sr.reveal('.home__pizza',{delay:1400, distance:'100px',origin:'bottom',rotate:{z:-90}})
sr.reveal('.home__about .recipe__list',{origin:'right'})
sr.reveal('.home__img.recipe__list',{origin:'left'})