 /**
 * Created by Ana on 03-Jun-16.
 */
 (function () {
     var customerFactory = function () {
         var customers = [
             {
                 id: 1,
                 joined: '2000-12-02',
                 name: 'ana',
                 city: 'Bgd',
                 orderTotal: 2,
                 orders: [{id: 1, product: 'Shoes', total: 2}]
             },
             {
                 id: 2,
                 joined: '2005-10-06',
                 name: 'mis',
                 city: 'Lnd',
                 orderTotal: 8,
                 orders: [{id: 2, product: 'Baseball', total: 5}, {id: 3, product: 'Bat', total: 5}]
             },
             {
                 id: 3,
                 joined: '2010-03-22',
                 name: 'mina',
                 city: 'Brdo',
                 orderTotal: 99,
                 orders: [{id: 2, product: 'Baseball', total: 5}, {id: 3, product: 'Bat', total: 5}]
             }
         ];

         var factory = {};

         factory.getCustomers = function () {
             return customers;
         };

         factory.getCustomer = function(customerId){
             for (var i = 0, len=customers.length; i<len; i++){
                 if (customers[i].id === parseInt(customerId)){
                    return customers[i];
                 }
             }
            
         };

         return factory;
     };
 angular.module('myApp').factory('customersFactory', customerFactory);
 }());