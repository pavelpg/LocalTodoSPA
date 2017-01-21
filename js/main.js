var React = require('react');
var ReactDOM = require('react-dom');
var TodoApplication = require('./todo-spa-component.js');

var todoList = [{title:'item1',done:false},{title:'item2',done:false},{title:'item3',done:true},{title:'test',done:false}];

ReactDOM.render(<TodoApplication data={todoList} />, document.getElementById('app'));


