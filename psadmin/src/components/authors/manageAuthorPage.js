/**
 * Created by richard.smith on 17/12/2015.
 */
"use strict";

var React = require('react');
var AuthorForm = require('./authorForm.js');

var ManageAuthorPage = React.createClass({
    render: function() {
        return (

            <AuthorForm/>
        );
    }
});

module.exports = ManageAuthorPage;