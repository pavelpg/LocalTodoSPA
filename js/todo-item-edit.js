var React = require('react');

module.exports = React.createClass({
    save: function () {
        this.props.endRename(this.props.item,this.newTitle.value);
    },
    newTitle:null,
    render: function () {
        var className = '',checked = false;
        if(this.props.item.done){
            className = 'done';
            checked = true;
        }
        return (<div>
                <input ref={ (r) => { this.newTitle = r; } } 
                    value={this.props.title} />
                <a onClick={this.save} className="action-link">save</a>
            </div>);
    }
});