/**
 * Created by richard.smith on 16/12/2015.
 */
"use strict";
var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

//if the path is not explicitly named below then React just assumes that the name of the route
//corresponds to the url i.e. http://.../about will load the about component
var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
    </Route>
);

module.exports = routes;