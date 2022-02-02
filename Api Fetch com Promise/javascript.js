(function readyJS(win, doc){
    'use strict';

    let btn = doc.querySelector('#btn');
    let result = doc.querySelector('#result');
    
    function fetchSend() {

        let params = {
            method: 'POST',
            mode: 'cors',
            cache: 'default'
        }

        fetch('controller.php', params)
        .then(function(response){
            if(response.ok)
                return response.json;
        })
        .then(function(data){
            result.innerHTML = data.name + ' tem ' + data.age + ' anos!';
        });
    }

    btn.addEventListener('click', fetchSend, false);
}(window, document));