var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', function(){
     menu.classList.toggle('active');

    if (iconMenu.getAttribute("src") == 'imagens/menu.img'){
        iconMenu.setAttribute("src","imagens/close.png");
    }else{
        iconMenu.setAttribute("src","imagens/menu.png");
    }

});