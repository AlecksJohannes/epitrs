import React, { Component } from 'react';
import {Box, Container, App, Column} from 'bloomer';
import {auth, charge} from '../http/Request';
import {StripeProvider, Elements} from 'react-stripe-elements';
import ChargeForm from './ChargeForm';

class Charge extends Component {
  render() {
    return (
      <Column>
        <StripeProvider apiKey="pk_test_12345">
          <Elements>
            <ChargeForm onCharge={this.props.onCharge}/>
          </Elements>
        </StripeProvider>
      </Column>
    );
  }
}

export default Charge;
