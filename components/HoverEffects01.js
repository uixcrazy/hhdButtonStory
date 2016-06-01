import React, { PropTypes } from 'react';
import classNames from 'classnames';

var HoverEffects01 = React.createClass({
  propTypes: {
    btnStyle: PropTypes.string
  },
  render: function() {
    let className = classNames('btn', this.props.btnStyle);
    return (
      <section className="effects01">
        <h1>Button Hover Effects</h1>
        <a className={className}>{this.props.children}</a>
        <p><a href="http://codepen.io/davidicus/pen/emgQKJ" target="_blank">source</a></p>
      </section>
    )
  }
})

module.exports = HoverEffects01;
