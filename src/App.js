import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab';
import TabList from './components/TabList';
import "bulma/css/bulma.css";
import Charge from './components/Charge'
import Payments from './components/Payments';
import {withCharge, withCharges, withDisputes} from './components/hoc/StripeApi';
import Home from './components/Home';
import Disputes from './components/Disputes';

const ChargeEnhanced = withCharge(Charge)
const PaymentsEnhanced = withCharges(Payments)
const HomeEnhanced = withCharges(Home)
const DisputesEnhanced = withDisputes(Disputes)

class App extends Component {

  render() {
    return (
      <TabList>
        <Tab name="Home">
          <HomeEnhanced />
        </Tab>
        <Tab name="Charge">
          <ChargeEnhanced />
        </Tab>
        <Tab name="Payments">
          <PaymentsEnhanced />
        </Tab>
        <Tab name="Disputes">
          <DisputesEnhanced />
        </Tab>
      </TabList>
    );
  }
}

export default App;
