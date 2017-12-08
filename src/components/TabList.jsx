import React from 'react';
import {Columns, Column, Notification} from 'bloomer';
import Charge from './Charge';

export default class TabList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabName: 'Charge'
    }
  }

  setActiveTab(name) {
    this.setState({
      selectedTabName: name
    })
  }

  render() {
    const Tabs = React.Children.map(this.props.children, (child) => {
      const className = (child.props.name === this.state.selectedTabName) ? 'sidebarLink selected' : 'sidebarLink';
        return React.cloneElement(child, { onSetActiveTab: this.setActiveTab.bind(this), className: className, selectedElem: this.state.selectedTabName })
    })
    return(
      <Columns isCentered className="sidebar">
        {Tabs}
      </Columns>
    )
  }
}
