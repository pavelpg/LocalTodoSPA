var React = require('react');

module.exports = React.createClass({
    save: function () {
        this.props.endRename(this.props.item,this.newTitle.value);
    },
    newTitle:null,
    componentDidMount: function () {
      this.newTitle.value = this.props.item.title;  
    },
    render: function () {
        var className = '',checked = false;
        if(this.props.item.done){
            className = 'done';
            checked = true;
        }
        return (<div>
                <input ref={ (r) => { this.newTitle = r; } }  />
                <button onClick={this.save}>save</button>
            </div>);
    }
});