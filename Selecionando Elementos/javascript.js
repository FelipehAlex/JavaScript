(function readyJS(win, doc){
    'use strict'

/*     let teste = doc.getElementById('teste');
    teste.className = 'New Class';
    teste.style.color = 'pink';
    console.log(teste); */
    
/*     let myClass = doc.getElementsByClassName('divClass');
    console.log(myClass[0].innerHTML); */

/*     let myName = doc.getElementsByName('img');
    console.log(myName); */

/*     let byTag = doc.getElementsByTagName('h1');
    console.log(byTag); */

/*     let byQuery = doc.querySelector(".btn");
    byQuery.addEventListener('click', function(){
        alert('oi');
    }) */

    let byQueryAll = doc.querySelectorAll('.btn');
    for(let i=0; i<byQueryAll.length; i++) {
        byQueryAll[i].addEventListener('click', function(){
            doc.querySelector('body').style.backgroundColor = this.getAttribute('data-color');
        })
    }

})(window, document);