/**
 * Created by richard.smith on 17/12/2015.
 */
"use strict";

var React = require('react');
var AuthorForm = require('./authorForm.js');

var ManageAuthorPage = React.createClass({

    getInitialState: function() {
        return {
          author: {id: '', firstName: '', lastName: ''}
        };
    },

    //this is a common pattern to set state being bubbled
    //up from a child component

    setAuthorState: function(event) {
        //get the event name
        var field = event.target.name;
        //and value
        var value = event.target.value;
        //assign these values to the state object
        this.state.author[field] = value;
        //finally call set state
        return this.setState({author: this.state.author});
    },

    render: function() {
        return (

            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
            />
        );
    }
});

module.exports = ManageAuthorPage;