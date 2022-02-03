(function readyJS(win, doc){
    'use strict';

    let parent = doc.querySelector('.parent');
    let child = doc.querySelector('.child');
    let grandchild = doc.querySelector('.grandchild');
    let form = doc.querySelector('#form1');

    // parent.addEventListener('click', function(){
    //     console.log('parent');
    // }, false);

    // child.addEventListener('click', function(){
    //     console.log('child');
    // }, false);

    // grandchild.addEventListener('click', function(){
    //     console.log('grandchild');
    // }, false);
    
    // parent.addEventListener('click', function(event){
    //     console.log('this', this);
    //     console.log('event', event.target);
    // }, false);

/*     parent.addEventListener('click', function(event){
        event.stopPropagation();
        console.log('parent');
    }, false);

    child.addEventListener('click', function(event){
        event.stopPropagation();
        console.log('child');
    }, false);

    grandchild.addEventListener('click', function(event){
        event.stopPropagation();
        console.log('grandchild');
    }, false); */

    form.addEventListener('blur', function (){
        alert('oi');
    }, true);

}(window, document));