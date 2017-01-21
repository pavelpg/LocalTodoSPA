var React = require('react');
var TodoItem = require('./todo-item.js');
var TodoItemEdit = require('./todo-item-edit.js')
module.exports = React.createClass({
    getInitialState: function () {
        return {editing: false, editItem: null, data: this.props.data};
    },
    startRename: function (item) {
        if (!this.state.editing) {
            this.setState({editing: true, editItem: item});
        }
    },
    endRename: function (item, newTitle){
        item.title = newTitle;
        this.setState({editing:false, editItem: null, data:this.state.data});
        
    },
    render: function () {
        var data = this.state.data;
        data.sort((a, b) => b.title === a.title ? 0 : (b.title > a.title ? 1 : -1));
        return (<div>
                <h1>Todo list:</h1>
                <div>
                    {
                        data.map(
                            function (item, index) {
                                return item === this.state.editItem?
                                    <TodoItemEdit item={item} endRename={this.endRename} />: 
                                    <TodoItem item={item} startRename={this.startRename} />; 
                            },
                        this)
                    }
                </div>
            </div>); // value-index;
    }
});
