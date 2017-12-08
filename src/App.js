import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab';
import TabList from './components/TabList';
import "bulma/css/bulma.css";
import Charge from './components/Charge'
import Payments from './components/Payments';
import {withCharge, withCharges} from './components/hoc/StripeApi';

const ChargeEnhanced = withCharge(Charge)
const PaymentsEnhanced = withCharges(Payments)

class App extends Component {

  render() {
    return (
      <TabList>
        <Tab name="Charge">
          <ChargeEnhanced />
        </Tab>
        <Tab name="Payments">
          <PaymentsEnhanced />
        </Tab>
      </TabList>
    );
  }
}

export default App;
