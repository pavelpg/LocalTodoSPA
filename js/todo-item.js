var React = require('react');

module.exports = React.createClass({
    rename: function () {
        this.props.startRename(this.props.item);
    },
    remove: function () {
        this.props.removeItem(this.props.itemId);
    },
    render: function () {
        var className = '',checked = false;
        if(this.props.item.done){
            className = 'done';
            checked = true;
        }
        return (<div className={className}>
                    <input type="checkbox" checked={checked} />{this.props.item.title}
                    <button onClick={this.rename}>rename</button>
                    <button onClick={this.remove}>remove</button>
                </div>);
    }
});
