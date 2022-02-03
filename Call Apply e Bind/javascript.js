(function readyJS(win, doc){
    'use strict';

    let result = doc.querySelector('.result');

    function data(/* author, age */) {
        return 'O livro é ' +this.title+ ' e tem ' +this.pages+ ' páginas.';
    }

/*     let book1 = {
        title: "E o vento levou",
        pages: 200
    };

    let book2 = {
        title: "A onda",
        pages: 50
    };
    result.innerHTML = data.call(book2); */

    let ajax = new XMLHttpRequest();
    ajax.open('GET', 'controller.php');
    ajax.onreadystatechange = function(){
        if(ajax.status === 200 && ajax.readyState === 4){
            let res = JSON.parse(ajax.responseText);
            res.map(function(elem, ind, obj){
                let child = doc.createElement('div');
                //child.innerHTML = data.call(elem,'Thiago', 18);
                //child.innerHTML = data.call(elem,['Thiago', 18]);
                let newFunction = data.bind(elem);
                child.innerHTML = newFunction();
                result.appendChild(child);
            });
      }
    };
    ajax.send();
    
}(window, document));