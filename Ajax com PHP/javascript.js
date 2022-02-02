(function readyJS(win, doc){
    'use strict';

    let form = doc.querySelector('#form');

    function sendForm(event){
        //Não sair da página
        event.preventDefault();

        let ajax = new XMLHttpRequest();
        let params = 'name=' + doc.querySelector('#name').value;
        ajax.open('POST', 'controller.php');
        ajax.setRequestHeader('Content-type', 'aplication/x-www-form-urlencoded');
        ajax.onreadystatechange = function(){
            if(ajax.status === 200 && ajax.readyState === 4) {
                let json = JSON.parse(ajax.responseText);
                console.log(json.name + '-'+ json.age + '-' + json.city);
            }
            else {
                alert('Failed');
            }
        };
        ajax.send(params);
    }

    form.addEventListener('submit', sendForm, false);

}(window, document));