(function readyJS(win, doc){
    'use strict';

    function app(adiant, salario) {
        this.adiant = adiant;
        this.salario = salario;
    };
    app.prototype.percent = function() {
        return this.adiant * 100 / this.salario;
    };
    app.prototype.result = function() {
        return 'Recebeu ' + this.percent() + '% relativo ao adiantamento'
    };
    
    function test() {

    };

    win.app = app;
    win.teste = test;
}(window, document));