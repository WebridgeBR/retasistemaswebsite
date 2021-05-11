/*
Abaixo se encontram funções referentes ao evento Scroll
*/
$(document).ready(() =>{
    $(document).on('scroll', changeNav);
    $(document).on('scroll', applyScrollEffectOnPageElements);
    $(document).on('scroll', hideScrollToTopBtn);

    
})   
const changeNav = () => {
    if($(document).scrollTop() > 100) {
         $('.navbar').removeClass('navbarReta transparent').addClass('navbarRetaNoPadding animate__slideInDown')
    }
    else {
        $('.navbar').removeClass('navbarRetaNoPadding animate__slideInDown').addClass('navbarReta') 
    }
}
const applyScrollEffectOnPageElements = () => {
    if($(document).scrollTop() > 170) {
        $('#hightlightsTransition > div > i').addClass('animate__animated animate__slideInUp');
        $('#hightlightsTransition > div > h4').addClass('animate__animated animate__slideInUp');
        $('#hightlightsTransition > div > p').addClass('animate__animated animate__slideInUp');
    }
    if($(document).scrollTop() > 400) {
        $('#aboutCompanyTransition').removeClass('opacity-0');
        $('#aboutCompanyTransition div:nth-child(1)').addClass('animate__animated animate__fadeInLeft');
        $('#aboutCompanyTransition div:nth-child(2)').addClass('animate__animated animate__fadeInRight');
    }
    if($(document).scrollTop() > 1000) {
        $('#solutionsTransition > div:nth-child(2)').removeClass('opacity-0');
        $('#solutionsTransition > div:nth-child(2)').addClass('animate__animated animate__slideInUp');
    }
    // if($(document).scrollTop() > 1450) {
    //     $('#solutionsTransition > div:nth-child(3)').removeClass('opacity-0');
    //     $('#solutionsTransition > div:nth-child(3)').addClass('animate__animated animate__slideInUp');
    // }
    // if($(document).scrollTop() > 1850) {
    //     $('#solutionsTransition > div:nth-child(4)').removeClass('opacity-0');
    //     $('#solutionsTransition > div:nth-child(4)').addClass('animate__animated animate__slideInUp');
    // }
    // if($(document).scrollTop() > 2150) {
    //     $('#solutionsTransition > div:nth-child(5)').removeClass('opacity-0');
    //     $('#solutionsTransition > div:nth-child(5)').addClass('animate__animated animate__slideInUp');
    // }
    if($(document).scrollTop() > 1870) {
        $('#RetaTecnologia > div:nth-child(1)').removeClass('opacity-0');
        $('#RetaTecnologia > div:nth-child(1) > div:nth-child(1)').addClass('animate__animated animate__slideInUp');
        $('#RetaTecnologia > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').addClass('animate__animated animate__slideInLeft');
        $('#RetaTecnologia > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)').addClass('animate__animated animate__slideInRight');
    }
    if($(document).scrollTop() > 2590) {
        $('#RetaPublico > div:nth-child(1) > div').removeClass('opacity-0');
        $('#RetaPublico > div:nth-child(1) > div').addClass('animate__animated animate__slideInUp');
    }
    if($(document).scrollTop() > 2800) {
        $('#RetaClientes > div').removeClass('opacity-0');
        $('#RetaClientes > div > div:nth-child(1) > div:nth-child(1)').addClass('animate__animated animate__slideInLeft');
        $('#RetaClientes > div > div:nth-child(2) > div:nth-child(1)').addClass('animate__animated animate__slideInLeft');
        $('#RetaClientes > div > div:nth-child(1) > div:nth-child(2)').addClass('animate__animated animate__lightSpeedInRight');
        $('#RetaClientes > div > div:nth-child(2) > div:nth-child(2)').addClass('animate__animated animate__lightSpeedInRight');
    }
    if($(document).scrollTop() > 3300) {
        $('#RetaReportagens > div:nth-child(2)').removeClass('opacity-0');
        $('#RetaReportagens > div:nth-child(2)').addClass('animate__animated animate__flipInY');
    }
    if($(document).scrollTop() > 3600) {
        $('#RetaContato > div:nth-child(1)').removeClass('opacity-0');
        $('#RetaContato > div:nth-child(1)').addClass('animate__animated animate__slideInUp');
    }
}
/*
Abaixo se encontra função para exibir Reportagens 
Foi necessário a criação dessa função manualmente
pois os exemplos disponíveis na documentação do bootstrap
não atende a implementeação necessária.
*/
const exibeConteudo = (e) => {
    /* Acessando todos os botões com a classe nav-link dentro de RetaPosts */
    const navLinkArray = $('.RetaPosts > div > ul > li > div > div:nth-child(2) > button');
    /* Loop criado para remover a classe active de todos os botões */
    for (let i = 0; i < navLinkArray.length; i++) {
        if (navLinkArray[i].classList.contains('active')) {
            navLinkArray[i].classList.remove('active');
        }
    }
    /* Adicionando a classe .active no botão atual */
    e.classList.add('active');
}
/* Função para ir para o topo da página */
const scrollToTop = () => {
    document.body.scrollTop = 0; // para Safari
    document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE e Opera
}
/* Função para esconder botão em certos periodos */
const hideScrollToTopBtn = () => {
    const toTopButton = document.getElementById('paraOInicioBtn');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        toTopButton.style.display = "block";
        toTopButton.classList.remove('opacity-0-btn');
        toTopButton.classList.remove('animate__fadeOutDown');
        toTopButton.classList.add('animate__slideInUp');
      } else {
        toTopButton.classList.add('animate__fadeOutDown');
        toTopButton.classList.add('opacity-0-btn');
        toTopButton.classList.remove('animate__slideInUp');
        setTimeout(() => {
            toTopButton.style.display = "none";
        },2000)
      }
}
/* Função que adiciona espaçamento entre a navbar e o conteudo */
$('#navbarSupportedContent ul li a').on('click', (e) => {
    e.preventDefault();
    let getSession = e.currentTarget.hash;
    if(getSession == '#RetaPublico')
    {
        let sessionOffset = $(`${getSession}`).offset().top;
        console.log(sessionOffset);
        document.body.scrollTop = sessionOffset - 150;
        document.documentElement.scrollTop = sessionOffset - 150;
    } else {
        let sessionOffset = $(`${getSession}`).offset().top;
        console.log(sessionOffset);
        document.body.scrollTop = sessionOffset - 50;
        document.documentElement.scrollTop = sessionOffset - 50;
    }
})
// $('#RetaFooter div div div div:nth-child(2) a').on('click', (e) => {
//     e.preventDefault();
//     let getSession = e.currentTarget.hash;
//     if(getSession == '#' || getSession == '')
//     {
//        document.body.scrollTop = 0;
//        document.documentElement.scrollTop = 0;
//     }
//     else if(getSession == '#RetaPublico')
//     {
//         let sessionOffset = $(`${getSession}`).offset().top;
//         console.log(sessionOffset);
//         document.body.scrollTop = sessionOffset - 150;
//         document.documentElement.scrollTop = sessionOffset - 150;
//     } else {
//         let sessionOffset = $(`${getSession}`).offset().top;
//         console.log(sessionOffset);
//         document.body.scrollTop = sessionOffset - 50;
//         document.documentElement.scrollTop = sessionOffset - 50;
//     }
// })
$('.go_to_contact').on('click', ()=>{
    let sessionOffset = $("#RetaContato").offset().top;
    document.body.scrollTop = sessionOffset - 50;
    document.documentElement.scrollTop = sessionOffset - 50;
})

$('#RetaFooter a').on('click', (e) => {
    e.preventDefault();
    if(e.currentTarget.hash == '#RetaPublico')
    {
        let sessionOffset = $(`${e.currentTarget.hash}`).offset().top;
        document.body.scrollTop = sessionOffset - 150;
        document.documentElement.scrollTop = sessionOffset - 150;
    } else {
        let sessionOffset = $(`${e.currentTarget.hash}`).offset().top;
        document.body.scrollTop = sessionOffset - 50;
        document.documentElement.scrollTop = sessionOffset - 50;
    }
    
})