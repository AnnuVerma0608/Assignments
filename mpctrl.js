(function(){
    var app = angular.module('app');
    app.controller("myCalc",myCalc);
    function myCalc(){
        var obj = this;
        obj.valA=0;
        obj.valB=0;
        obj.theSum=0;
        obj.addValues = function(){
            obj.theSum = parseInt(obj.valA) + parseInt(obj.valB);
        }

    }
})();