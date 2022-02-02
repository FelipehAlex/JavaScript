(function readyJS(win, doc){
    'use strict';

/*     let btn = doc.querySelector('#btn');

    setTimeout(counter, 3000);
    //setInterval(counter, 3000);
    console.log('Hello');
    function counter() {
        for(let i=0; i< 10; i++) {
            console.log(i);
        }
    }
    btn.addEventListener('click', counter, false);
    console.log('World'); */

    let i = 0;
    function counter() {
        i++;
        console.log(i);
        
        if(i >= 5) {
            return;
        }
        setTimeout(counter, 1000)
    }
    counter();

})(window, document);