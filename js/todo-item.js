var React = require('react');

module.exports = React.createClass({
    rename: function () {
        this.props.startRename(this.props.item);
    },
    render: function () {
        var className = '',checked = false;
        if(this.props.item.done){
            className = 'done';
            checked = true;
        }
        return (<div className={className}>
                    <input type="checkbox" checked={checked} />{this.props.item.title}
                    <a onClick={this.rename} className="action-link">rename</a>
                </div>);
    }
});
