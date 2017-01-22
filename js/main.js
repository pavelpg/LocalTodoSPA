var React = require('react');
var ReactDOM = require('react-dom');
var TodoApplication = require('./todo-spa-component.js');

var todoList = [{title:'item1',done:false},{title:'item2',done:false},{title:'item3',done:true},{title:'test',done:false}];
function getData(){
    return JSON.parse(window.localStorage.getItem('todoListData'));
}
function setData(data){
    window.localStorage.setItem('todoListData',JSON.stringify(data));
}
ReactDOM.render(<TodoApplication getData={getData} setData={setData} />, document.getElementById('app'));


