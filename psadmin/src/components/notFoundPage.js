/**
 * Created by richard.smith on 17/12/2015.
 */
"use strict";

var React = require('react');
var Link = require('react-router').Link;


var NotFoundPage = React.createClass({
    render: function(){
        return (
            <div>
               <h1>Page Not Found</h1>
                <p>Sorry, nothing to see here</p>
                <p><Link to="app">Back to home</Link></p>
            </div>
        );
    }
});

module.exports = NotFoundPage;