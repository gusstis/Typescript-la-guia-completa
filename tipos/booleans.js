"use strict";
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
/*
camelCase      =>   firstName
PascalCase      =>   FirstName
SnakeCase       =>   first_name
KebabCase       =>   first-name
UpperCase + SnakeCase   =>   FIRST_NAME
lowercase       =>   firstname
*/
