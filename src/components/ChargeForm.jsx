import React, { Component } from 'react';
import {Box, Container, App} from 'bloomer';
import {StripeProvider} from 'react-stripe-elements';
import {injectStripe, CardElement} from 'react-stripe-elements';


class ChargeForm extends Component {
  render() {
    return (
      <div>
       <label>
         Card details
         <CardElement style={{base: {fontSize: '18px'}}} />
         <input type="number" placeholder="Amount to Charge" />
       </label>
       <button onClick={() => {this.props.onCharge()}}>Confirm order</button>
      </div>
    );
  }
}

export default ChargeForm;
