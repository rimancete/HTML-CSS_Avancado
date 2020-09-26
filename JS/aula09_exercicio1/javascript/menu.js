(function(){
    'use strict';
    /*Função que mostra/esconde recursos conforme clique no menu*/
    //referencia menu e path
    var $html = document.querySelector('html');
    var $btnMenu = document.querySelector('.header-nav__hamburgger');
    
    /*caso o js esteja disponivél, na tag html, remover a classe 'no-js'
    e add a classe'js'
    */
    $html.classList.remove('no-js');
    $html.classList.add('js');
    //escuta o clique no botão e
    $btnMenu.addEventListener('click', function (){
        //adiciona classe no html para realizar o toggle
        $html.classList.toggle('menu-opened');

        /*Aula09 - Ex1
        NA PRÁTICA: O aria('aria-controls') do botão está relacionado com o elemento de id 'mainsMenu'(no caso ul do menu).
        No default, o menu está fechado(aria-expanded ='false' do botão) e
        o menu(ul) nem está com a propriedade 'aria-expanded' setada.
        Após clique no botão:
        1- Button/UL > Relaciona o botão com o menu
        2- Button > Altera o 'aria-expanded' do botão inversamento ao valor atual
        3- UL > Seta o atributo 'aria-expanded' do menu para o mesmo valor do botão
        
        TECNICAMENTE: Recuperar valor de aria-controls do button
        seleciona ul com base no id do button
        ao clicar no button, setar 'aria-expanded' de ul e button com o oposto do valor do 'aria-expanded' do button
        */
        
        //referência para ul contendo o menu
        var $menu = document.getElementById('mainMenu');        
        //Altera o 'aria-expanded' do botão inversamento ao valor atual 
        document.querySelector('.header-nav__hamburgger').attributes[3].value = Boolean($html.classList[1] === 'menu-opened');
        //Seta o atributo 'aria-expanded' do menu(ul) para o mesmo valor do botão 
        $menu.setAttribute('aria-expanded',document.querySelector('.header-nav__hamburgger').attributes[3].value);
        
    });
        
        
    
})()
