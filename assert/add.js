'use strict';

const slice = Array.prototype.slice;

function addArray(a,b) {
    return a+=b;
}

function add(){
    const args = arguments;
    const arr = Array.isArray(args[0]) ? args[0] :slice.call(arguments,0);
    return arr.reduce(addArray,0);

}

module.exports = add;