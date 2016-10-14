(function(){
    'use strict';
    var app = angular.module('myApp'); //By using only one parameter, the module method works as a getter method
//i.e we are getting the reference of myApp.

    app.controller('MyCalc',MyCalc);

    function MyCalc(){
        var vm = this;
        vm.valA = 0;
        vm.valB=0;
        vm.theSum=0;

        vm.addValues = function(){
            vm.theSum = parseInt(vm.valA) + parseInt(vm.valB);
        }
    }

})();

/*
   angular.module('myApp')
        .controller(........);
 */
