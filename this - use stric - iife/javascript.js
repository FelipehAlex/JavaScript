/* console.log(this);

function teste() {
    console.log(this);
}
teste(); */

/* let obj = {
    name: "thiago",
    func: function() {
        return this.name;
    }   
}
console.log(obj.func());
 */
/* 
'use strict';
x = 10;
console.log(x);
let eval = 10;
console.log(eval);
   
function teste() {
    console.log(this);
}
teste(); */

//immediately-invoked function exprection (IIFE)
(function(win, doc){
    'use strict';
    let x = 20;
    console.log(x);
    console.log(win);
    console.log(doc);
    console.log(this);
})(window, document);