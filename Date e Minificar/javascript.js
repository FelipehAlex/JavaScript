(function readyJS(win, doc){
    'use strict';

    let date = new Date();
    //console.log(date);
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());
    // console.log(date.getFullYear());

    let result = doc.querySelector('#result');
    function clock() {
        let date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        result.innerHTML = hour+':'+minutes+':'+seconds;
        setTimeout(clock, 1000);
    }    
    clock();

}(window, document));