import React from 'react';
import {Column, Columns} from 'bloomer';

export default class Tab extends React.Component {
  render() {
    let body;
    React.Children.forEach(this.props.children, (child) => {
      if(this.props.selectedElem === this.props.name) {
        body = child
      }
    })

    return(
        <Column>
          <ul className="sideBar-Section">
            <li className={this.props.name} onClick={() => {this.props.onSetActiveTab(this.props.name)}}>
              <a className={`${this.props.name} ${this.props.className}`}>
                <span>
                  {this.props.name}
                </span>
              </a>
            </li>
          </ul>
          <div style={{marginLeft: 150}}>
            {body}
          </div>
        </Column>
    )
  }
}

