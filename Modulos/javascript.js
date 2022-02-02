/* import sum from './modules/sum.js';
import mult from './modules/mult.js';

function percent(value, total) {
    return mult(value, 100) / total +'%';
}

console.log(percent(6, 10)); */

import {sum, mult, percent} from "./modules/calc.js";
console.log(sum(3, 2));