import React from 'react';
import {Columns, Column, Notification} from 'bloomer';

export default class TabList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabName: ''
    }
    this.isActive = this.isActive.bind(this);
  }

  isActive(name) {
    return this.state.selectedTabName === name
  }

  setActiveTab(name) {
    this.setState({
      selectedTabName: name
    })
  }

  render() {
    return(
      <Columns isCentered className="sidebar">
        <Column isSize='1/3'>
          {
            React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { onSetActiveTab: this.setActiveTab.bind(this), isActive: this.isActive(child.props.className) });
            })
          }
        </Column>
        <Column>
          <h1>Hello</h1>
        </Column>
      </Columns>
    )
  }
}

