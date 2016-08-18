'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var React = require('react');

var Col = React.createClass({
  displayName: 'Col',

  propTypes: {
    xs: React.PropTypes.number,
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number,
    xsOffset: React.PropTypes.number,
    smOffset: React.PropTypes.number,
    mdOffset: React.PropTypes.number,
    lgOffset: React.PropTypes.number,
    reverse: React.PropTypes.bool
  },
  _classMap: {
    xs: 'col-xs-',
    sm: 'col-sm-',
    md: 'col-md-',
    lg: 'col-lg-',
    xsOffset: 'col-xs-offset-',
    smOffset: 'col-sm-offset-',
    mdOffset: 'col-md-offset-',
    lgOffset: 'col-lg-offset-'
  },
  render: function render() {
    var _props = this.props;
    var reverse = _props.reverse;
    var className = _props.className;

    var other = _objectWithoutProperties(_props, ['reverse', 'className']);

    var classes = [];

    if (className) {
      classes.push(className);
    }

    if (reverse) {
      classes.push('reverse');
    }

    var passingProps = {};
    for (var key in other) {
      if (this._classMap[key]) {
        var value = other[key];
        if (value) {
          classes.push('' + this._classMap[key] + value);
        }
      } else {
        passingProps[key] = other[key];
      }
    }

    return React.createElement('div', _Object$assign({}, passingProps, {
      className: classes.join(' ')
    }), this.props.children);
  }
});

module.exports = Col;