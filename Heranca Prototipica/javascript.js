(function readyJS(win, doc){
    'use strict';

    function person(name, func) {
        this.name = 'Felipe';
        this.friends = ['Carl', 'Robert'];
        this.func = func;
    }

    //sempre bom usar com dados que não se alteram
    //usar tipo como heranção
    person.prototype.city = 'BH';
    person.prototype.salario = function() {
        if(this.func === 'manager') {
            return 3000;
        }
        else if (this.func === 'user') {
            return 100;
        }
    }

    let obj = new person('Felipe', 'manager');
    obj.friends.push('Juliet');
    let obj2 = new person('Thais', 'user');
    console.log(obj);
    console.log(obj2);
    console.log(obj.salario());
    console.log(obj2.salario());


}(window, document));