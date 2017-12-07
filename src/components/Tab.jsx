import React from 'react';

export default class Tab extends React.Component {
  render() {
    return(
      <div className={this.props.isActive ? 'selected' : 'a'} onClick={(element) => {this.props.onSetActiveTab(element.currentTarget.className)}}>
        <h1>{this.props.tabName}</h1>
      </div>
    )
  }
}

