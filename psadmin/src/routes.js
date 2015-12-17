/**
 * Created by richard.smith on 16/12/2015.
 */
"use strict";
var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

//if the path is not explicitly named below then React just assumes that the name of the route
//and the url to the component are the same. The name of the route just gives us a handle to
//reference it by throughout the app

//Note use of redirects as well
var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />
        <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <NotFoundRoute handler={require('./components/notFoundPage')} />
        <Redirect from="about-us" to="about" />
        <Redirect from="awthers" to="authors" />
        <Redirect from="about/*" to="about" />
    </Route>
);

module.exports = routes;