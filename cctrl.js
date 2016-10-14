(function(){
    'use strict';
    var app = angular.module('app');
    app.controller('myCalc',myCalc);

    function myCalc(){
        var vm = this;
        vm.valA=0;
        vm.valB=0;
        vm.theSum=0;
        vm.addValues=function(){
            vm.theSum = parseInt(vm.valA)+parseInt(vm.valB)
        }
    }
})();