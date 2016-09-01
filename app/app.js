/**
 * Created by Ana on 6/2/2016.
 */

    //option1
//var app = angular.module("myApp", []);


//option 2 //option 3

(function(){

    var app =  angular.module("myApp", ['ngRoute', 'ngAnimate']);
    app.config(function($routeProvider){
        $routeProvider
            .when('/',{
                controller: 'CustomersController',
                templateUrl: 'app/views/customers.html'
            })
            .when('/orders/:customerId',{
                controller: 'OrdersController',
                templateUrl: 'app/views/orders.html'
            })
            .otherwise( {redirectTo:'/'});
    });
}());



