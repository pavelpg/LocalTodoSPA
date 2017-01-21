var React = require('react');

module.exports = React.createClass({
    render: function () {
        var data = this.props.data;
        data.sort((a,b) => b.title === a.title? 0 : (b.title > a.title? 1: -1));
        return <div>{data.map((v,i) => <div>{v.title}</div>)}</div>; // value-index;
    }
});
