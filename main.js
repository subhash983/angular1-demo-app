var module = angular.module('myApp', []);
module.controller('mainCtrl', function() {
    var self = this;
    self.hourOfDay = 10;
    self.currentTime = new Date().toJSON();
    self.refreshTime = function() {
        self.currentTime = new Date().toJSON();
    };
    self.isSelected = false;
});

module.controller('controller1', function() {
    var self = this;
    self.testVar = "from ctrl1";
});
module.controller('controller2', function() {
    var self = this;
    self.testVar = "from ctrl2";
});

module.controller('calculatorController', function() {
    var self = this;
    self.result = 0;
    self.add = function() {
        self.result = Number(self.firstValue) + Number(self.secondValue);
    };

    self.subtract = function() {
        self.result = Number(self.firstValue) - Number(self.secondValue);
    };

    self.multiply = function() {
        self.result = Number(self.firstValue) * Number(self.secondValue);
    };

    self.divide = function() {
        self.result = Number(self.firstValue) / Number(self.secondValue);
    };
});

module.controller('directiveController', function() {
    var self = this;
    this.users = [
        {
            fName: "John",
            lName: "Cena"
        }, {
            fName: "Shyam",
            lName: "Agrwal"
        }, {
            fName: "Arnab",
            lName: "Sen"
        }
    ];
});
