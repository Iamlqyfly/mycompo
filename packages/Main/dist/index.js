(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@my-compo/button'), require('@my-compo/alert')) :
    typeof define === 'function' && define.amd ? define(['@my-compo/button', '@my-compo/alert'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.main = factory(global.Button, global.Alert));
})(this, (function (Button, Alert) { 'use strict';

    var index = {
        Button,
        Alert
    };

    return index;

}));
