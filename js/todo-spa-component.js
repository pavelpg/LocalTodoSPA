var React = require('react');
var TodoItem = require('./todo-item.js');
module.exports = React.createClass({
    getInitialState: function () {
        return {editing: false, editItem: null};
    },
    startRename: function (item) {
        if (!this.state.editing) {
            this.setState({editing: true, editItem: item});
        }
    },
    render: function () {
        var data = this.props.data;
        data.sort((a, b) => b.title === a.title ? 0 : (b.title > a.title ? 1 : -1));
        return (<div>
                <h1>Todo list:</h1>
                <div>
                    {
                        data.map(
                            function (item, index) {
                                return item === this.state.editItem?<div>edit</div>: <TodoItem item={item} startRename={this.startRename} />; 
                            },
                        this)
                    }
                </div>
            </div>); // value-index;
    }
});
