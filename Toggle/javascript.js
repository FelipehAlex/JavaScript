(function readyJS(win, doc){
    'use strict';

    let btn = doc.querySelector("#btn");
    let menu = doc.querySelector(".menu"); 

    function toggle(event) {
        if(menu.classList.contains("show")) {
            menu.classList.remove("show");
            btn.setAttribute("src", "https://w7.pngwing.com/pngs/929/428/png-transparent-responsive-web-design-navigation-bar-computer-icons-menu-hamburger-button-menu-text-cafe-responsive-web-design.png")           
        }
        else {
            menu.classList.add("show");
            btn.setAttribute("src", "https://thumbs.dreamstime.com/b/bot%C3%A3o-de-menu-do-hamb%C3%BArguer-%C3%ADcone-plano-num-fundo-transparente-182087461.jpg");
        }
    }

    btn.addEventListener("click", toggle, false);

})(window, document);