/**
 * Created by richard.smith on 15/12/2015.
 */
//this odd notation just means that we can reference jquery
//using $ notation or by jQuery. Bootstrap expects to be able
//to reference jquery using global $ variable - so we can't use "use strict" here

$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage.jsx');
var About = require('./components/about/aboutPage.jsx');
var Header = require('./components/common/header.jsx');

//use IIFE to keep all this stuff off global scope
(function(win){
    "use strict";

    var App = React.createClass({
        render: function(){
            var Child;

            switch(this.props.route){
                case 'about': Child = About; break;
                default: Child = Home;
            }

            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );
        }
    });

    function render() {
        var route = window.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }

    win.addEventListener('hashchange', render);
    render();

})(window);



//React.render(<Home/>, document.getElementById('app'));