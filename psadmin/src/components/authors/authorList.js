/**
 * Created by richard.smith on 16/12/2015.
 */
"use strict";
var React = require('react');
var AuthorList = React.createClass({

    //define which property types are required
    //note this only works in dev mode - not when
    //react is minified
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    render: function() {

        var createAuthorRow = function(author) {
            return (<tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                    <th>ID</th>
                    <th>Name</th>
                    </thead>
                    <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorList;