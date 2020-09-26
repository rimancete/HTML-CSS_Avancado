(function(){
    'use strict';
    
    /*Função que mostra/esconde recursos conforme clique no menu*/
    //referencia para o html, botão e menu
    var $html = document.querySelector('html');
    var $btnMenu = document.querySelector('.header-nav__hamburgger');
    var $menu = document.getElementById('mainMenu');
    /*caso o js esteja disponivél, na tag html, remover a classe 'no-js'
    e add a classe'js'
    */
    $html.classList.remove('no-js');
    $html.classList.add('js');
    //escuta o clique no botão e
    $btnMenu.addEventListener('click', function (){
        //adiciona classe no html para realizar o toggle
        $html.classList.toggle('menu-opened');
        
        
    });

})()
