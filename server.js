/**
 * Created by Ana on 03-Jun-16.
 */
var express = require('express'),
    app = express();


var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    app.use(express.static(__dirname, '/'));
}

app.get('/customers/:id', function (req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === customerId) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
});


app.get('/customers', function(req,res){
    res.json(customers);
});

app.listen(8080);

console.log("Express listening on port 8080");

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