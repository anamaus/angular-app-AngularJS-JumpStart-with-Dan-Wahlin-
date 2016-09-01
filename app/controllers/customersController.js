

//option 1
//app.controller("CustomersController", function($scope) {
//    $scope.sortBy = 'name';
//    $scope.reverse = false;
//
//
//    $scope.customers = [
//        {joined: '2000-12-02', name: 'ana', city: 'Bgd', orderTotal: 2},
//        {joined: '2005-10-06', name: 'mis', city: 'Lnd', orderTotal: 8},
//        {joined: '2010-03-22', name: 'mina', city: 'Brdo', orderTotal: 99}
//    ];
//    $scope.doSort = function (propName) {
//        $scope.sortBy = propName;
//        $scope.reverse = !$scope.reverse;
//    };
//});

//option 2
//(function () {
//    angular.module('myApp')
//        .controller("CustomersController", function ($scope) {
//            $scope.sortBy = 'name';
//            $scope.reverse = false;
//
//
//            $scope.customers = [
//                {joined: '2000-12-02', name: 'ana', city: 'Bgd', orderTotal: 2},
//                {joined: '2005-10-06', name: 'mis', city: 'Lnd', orderTotal: 8},
//                {joined: '2010-03-22', name: 'mina', city: 'Brdo', orderTotal: 99}
//            ];
//            $scope.doSort = function (propName) {
//                $scope.sortBy = propName;
//                $scope.reverse = !$scope.reverse;
//            };
//        });
//}());

//option 3


(function () {

    var CustomersController = function ($scope, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers =[];
        $scope.appSettings = appSettings;

        function init(){
            $scope.customers = customersFactory.getCustomers();

        }
        init();

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };

    CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

    angular.module('myApp')
        .controller("CustomersController", CustomersController );
}());