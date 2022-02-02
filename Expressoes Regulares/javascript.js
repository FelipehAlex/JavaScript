(function readyJS(win, doc){
    'use strict';

    let msg = "A História do Brasil começa com a chegada dos primeiros humanos na América do Sul há pelo menos 22 000 anos AP. Em fins do século XV, quando do Tratado de Tordesilhas, toda a área hoje conhecida como Brasil era habitada por tribos seminômades que subsistiam da caça, pesca, coleta e agricultura.";
    let email = "webdesignemfoco@gmail.com";
    console.log(email);

    let regex = /^[a-z0-9.]+@[a-z0-9]+(\.+[a-z]+)?$/gi;

    //Match
/*     let result = msg.match(regex);
    console.log(result); */

    //split
/*     let result = msg.split(regex);
    console.log(result); */
    
    //Replace
/*     let result = msg.replace(regex, function(x){
        return "__" + x.toUpperCase() + "__";
    });
    console.log(result); */

    //Search
    let result = email.match(regex);
    console.log(result);
    
})(window, document);