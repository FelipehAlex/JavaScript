(function readyJS(win, doc){
    'use strict';

    let btn = doc.querySelector('#btn');

    function alertar(event) {
        console.log(event.target);

    }

    btn.addEventListener("click", alertar, false);

})(window, document);