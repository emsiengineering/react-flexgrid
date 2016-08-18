'use strict';

jest.dontMock('../Col');

describe('Col', function () {
  var React = require('react');
  var ReactDOM = require('react-dom');
  var TestUtils = require('react/lib/ReactTestUtils');
  var Col = require('../Col');

  it('Should add classes equals to props', function () {
    var col = TestUtils.renderIntoDocument(React.createElement(Col, { xs: 12, sm: 8, md: 6, lg: 4 }));
    var className = ReactDOM.findDOMNode(col).className;
    expect(className).toContain('col-xs-12');
    expect(className).toContain('col-sm-8');
    expect(className).toContain('col-md-6');
    expect(className).toContain('col-lg-4');
  });

  it('Should add "reverse" class if "reverse" property is true', function () {
    var col = TestUtils.renderIntoDocument(React.createElement(Col, { reverse: true }));
    expect(ReactDOM.findDOMNode(col).className).toContain('reverse');
  });

  it('Should not replace class', function () {
    var col = TestUtils.renderIntoDocument(React.createElement(Col, { className: 'foo', md: 3 }));
    var className = ReactDOM.findDOMNode(col).className;
    expect(className).toContain('foo');
    expect(className).toContain('col-md-3');
  });
});