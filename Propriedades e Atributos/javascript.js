(function readyJS(win, doc){
    'use strict';

    let body = doc.querySelector("body");
    body.style.backgroundColor = "blue";

    let image = doc.querySelector("#girl");
/*     console.log(image.className);
    console.log(image.dataset.info);
    console.log(image.attributes);
    console.log(image.hasAttribute('data-info')); */
    image.setAttribute('data-color', 'pink');
    image.removeAttribute('id');
    console.log(image.attributes);


})(window, document);