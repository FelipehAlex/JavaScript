/* //Formal
let myArr = new Array("thiago", "webdesign", 10);

//Literal
let myArr2 = ["thais", "teacher",{school: "center"}];

//Associativo
let myArrAss = {
    name: "thiago",
    age: 18
}

myArr2[3] = 1234567
console.log(myArr2); */

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['s', 't', 's'];

//Concatenação
let arrFinal = arr1.concat(arr2);

//Every
let everyX = arrFinal.every(
    function verifyElements(elem, ind, obj) {
        return (typeof elem == "number");
    }    
);

//Filter
let filterX = arrFinal.filter(
    function verifyElements(elem, ind, obj) {
        return (elem > 3);
    }    
);


//ForEach
let data = "";
let forEachX = arrFinal.forEach(
    function verifyElements(elem, ind, obj) {
        data += "Índece " + ind + " : " + elem + "\n";
    }
);

//IndexOf
let indexOfX = arrFinal.indexOf("t");
if (indexOfX == -1) {
    alert("Esse dado não existe");

}
//Last Index Of
let lastIndexOfX = arrFinal.lastIndexOf("s");


//Join
let joinX = arrFinal.join("-");

//Map e Push
let mapFinal = [];
let mapX = arrFinal.map(
    function verifyElements(elem, ind, obj) {
        if(elem == "number") {
           mapFinal.push(elem * 2);
        }
        else {
            mapFinal.push(elem);
        }
    }
);

//Pop
mapFinal.pop();
mapFinal.pop();

//Some
let someX = arrFinal.some(
    function verifyElements(elem, ind, obj) {
        return typeof(elem == "number");
    }
);

//Reverse
/* let reverseX = arrFinal.reverse(); */

//Reduce
let reduceX = arrFinal.reduce(
    function verifyElements(v1, v2, ind, arr) {
        return v1 + v2;
    }
);

//Shift
/* let shiftX = arrFinal.shift();
let shiftX2 = arrFinal.shift(); */

//Slice
/* let sliceX = arrFinal.slice(3, 6); */

//Sort
/* let sortX = arrFinal.sort(); */

//Splice
/* let spliceX = arrFinal.splice(3, 2, 'y', 'w', 0); */

//Unshift
/* let unshiftX = arrFinal.unshift(-1, -2, -3); */

//ToString
let toStringX = arrFinal.toString();

console.log(arrFinal);
console.log(reduceX);