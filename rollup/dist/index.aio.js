/*!
 * liuyi-clone 1.0.2
 * Licensed under MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.clone = factory());
}(this, (function () { 'use strict';

    function type(data){
        return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
    }

    function clone(source){
        const t=type(source);

        if(t!=='object' && t!=='array'){
            return source
        }

        let target;

        if(t==='object'){
           target={};
           for(let key in source){
             if(source.hasOwnProperty(key)){
                 target[key]=clone(source[key]);
             }
           }

        }else{
            target=[];
            for(let i=0;i<source.length;i++){
                target[i]=clone(source[i]);
            }
        }

        return target;

    }

    return clone;

})));
