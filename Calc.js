'use strict';

function calc(){
    return {
        sum: _sum
    ,   sub: _sub
    };

    function _sum(a,b){
        return a + b;
    }
     function _sub(a,b){
        return a - b;
    }
}

module.exports = calc();