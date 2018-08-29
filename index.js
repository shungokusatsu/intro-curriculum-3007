'use strict';

/**
 * 17の倍数である場合 trueを返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num){
    if(num%17===0){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
