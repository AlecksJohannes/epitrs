import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {withCharge} from './components/hoc/Tabhoc';
import Tab from './components/Tab';
import TabList from './components/TabList';
const TabEnhancedwithCharge = withCharge(Tab)

class App extends Component {
  render() {
    return (
      <div className="App">
				<TabList>
        	<TabEnhancedwithCharge className="a" tabName={"Charge"} />
        	<TabEnhancedwithCharge className="b" />
				</TabList>
      </div>
    );
  }
}

export default App;
