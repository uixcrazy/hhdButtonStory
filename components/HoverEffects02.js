import React, { PropTypes } from 'react';
import classNames from 'classnames';

var HoverEffects02 = React.createClass({
  propTypes: {
    btnStyle: PropTypes.string
  },
  render: function() {
    let className = classNames(this.props.btnStyle);
    return (
      <section className="effects02">
        <a data-text={this.props.children} className={className}>{this.props.children}</a>
      </section>
    )
  }
})

module.exports = HoverEffects02;