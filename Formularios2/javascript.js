(function readyJS(win, doc) {
    'use strict';

    let gallery = doc.querySelector('.gallery');
    let files = doc.querySelector('#img');

    function imgPreview(event) {
        gallery.innerHTML = '';
        let files = event.target.files;
        for(let i=0; i<files.lenght; i++) {
            if(files[i].size > 3000000) {
                alert('Arquivo muito grande');
            }
            else {
                let reader = new FileReader();
                reader.onload = function (event) {
                    let urlImg = event.target.result;
                    let newImg = doc.createElement('img');
                    newImg.setAttribute("src", urlImg);
                    newImg.style = 'width: 100px; margin: 5px;';
                    gallery.appendChild(newImg);
                }
                reader.readAsDataURL(files[i]);
            }
        }
    }

    files.addEventListener('change', imgPreview, false);
})(window, document);