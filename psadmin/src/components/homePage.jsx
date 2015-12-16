/**
 * Created by richard.smith on 15/12/2015.
 */
"use strict";

var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Pluralsight Admin</h1>
                <p>React, React Router and Flux for ultra-responsive web apps</p>
            </div>
        );
    }
});

module.exports = Home;