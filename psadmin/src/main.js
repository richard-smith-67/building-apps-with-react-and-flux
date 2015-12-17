/**
 * Created by richard.smith on 15/12/2015.
 */
//this odd notation just means that we can reference jquery
//using $ notation or by jQuery. Bootstrap expects to be able
//to reference jquery using global $ variable - so we can't use "use strict" here

"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});



