// multiplicate of values
function multNumbers(x, y) {
    let result = x * y;
    return result;
}
console.log(multNumbers(10, 2));
console.log(multNumbers(3, 2));

let mult = function(x, y) {
    let result = x * y;
    return result;
}

let objMult = {
    func:function(x, y) {
        let result = x * y;
        return result;
    }
}

console.log(objMult.func(4, 2));

function myName(val) {
    
    let name;

    function setName(name) {
        if(val == 1) {
            name = 'Thiago';
        }
        else if(val == 2) {
            name = 'Thais';
        }
        else {
            name = 'Nenhum dado foi disponibilizado'
        }
        return name;
    }
    return setName();

}
console.log(myName(17));


// //Arrow functions
// function sum(x, y){
//     return x+y;
// }

// let sumArrow = (x, y) => {
//     return x + y;
// } 

// let sumArrow = (x, y) => x + y;
