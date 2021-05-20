$(document).ready(() => {
    /* Atrasando animações de cartões em sobre_educanet.html */
    //delay animations
    let cards = document.getElementsByClassName('delay_card_animation');
    let light_cards = document.getElementsByClassName('light_card');
    const applying_Effect = (element) => {
        for(let x = 0; x < element.length; x++){
            let animationDuration = x+1+'s';
            //element[x].style.setProperty('--animate-duration', animationDuration);
            element[x].style.animationDuration = animationDuration;
        } 
    }
    applying_Effect(cards);
    applying_Effect(light_cards);
})

$('.go_to_index').on('click',()=>{
    window.location.href='index.html'
})
const go_to_current_location = (location)=> window.location.href=`index.html${location}`;
