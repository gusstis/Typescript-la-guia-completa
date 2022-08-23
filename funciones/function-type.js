"use strict";
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado!"; };
    var myFunction;
    myFunction = 10;
    console.log(myFunction);
    console.log("Terminé");
    myFunction = addNumber;
    console.log(myFunction(1, 3));
})();
