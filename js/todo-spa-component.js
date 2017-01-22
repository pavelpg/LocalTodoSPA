var React = require('react');
var TodoItem = require('./todo-item.js');
var TodoItemEdit = require('./todo-item-edit.js')
module.exports = React.createClass({
    getInitialState: function () {
        var data = this.props.getData();
        if(!(data instanceof Array)){
            data = [];
        }
        return {mode: 'view', editItem: null, data: data};
    },
    componentDidUpdate: function(){
        this.props.setData(this.state.data);
    },
    startRename: function (item) {
        if (this.state.mode === 'view') {
            this.setState({mode: 'edit', editItem: item});
        }
    },
    endRename: function (item, newTitle){
        item.title = newTitle;
        this.setState({mode: 'view', editItem: null, addItem: null, data:this.state.data});
        
    },
    updateItemDone: function (item, done){
        item.done = done;
        this.setState({data:this.state.data});
    },
    removeItem: function (itemId){
        this.state.data.splice(itemId,1);
        this.setState({data:this.state.data});
    },
    startAddItem: function (){
        if(this.state.mode === 'view'){
            this.setState({mode:'add',addItem:{title:'',done:false}});
        }
    },
    endAddItem: function (item, newTitle) {
        item.title = newTitle;
        this.state.data[this.state.data.length] = item;
        this.setState({mode: 'view', addItem: null, data:this.state.data});
    },
    render: function () {
        var data = this.state.data;
        data.sort((a, b) => b.title === a.title ? 0 : (b.title > a.title ? 1 : -1));
        return (<div>
                <h1>Todo list:</h1>
                <button onClick={this.startAddItem}>add</button>
                { this.state.mode === 'add'? <TodoItemEdit item={this.state.addItem} endRename={this.endAddItem} />: <div></div> }
                <div>
                    {
                        data.map(
                            function (item, index) {
                                return item === this.state.editItem?
                                    <TodoItemEdit item={item} endRename={this.endRename} />: 
                                    <TodoItem item={item} startRename={this.startRename} updateItemDone={this.updateItemDone} itemId={index}  removeItem={this.removeItem} />; 
                            },
                        this)
                    }
                </div>
            </div>); // value-index;
    }
});
