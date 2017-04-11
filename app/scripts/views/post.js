import React from 'react';

export default React.createClass({
  getInitialState: function() {
      return {
          hidden: false
      };
  },
  hideContent: function() {
      this.setState({
          hidden: !this.state.hidden
      });
  },

  render: function() {
    var pClass = 'show-content';
    if (this.state.hidden) {
        pClass = 'hide-content';
    }
    return(
      <div>
        <h3>{this.props.title}</h3>
        <button onClick={this.hideContent}>Toggle</button>
        <p className={pClass}>{this.props.body}</p>
      </div>
    )
  }
})
