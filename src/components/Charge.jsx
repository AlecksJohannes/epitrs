import React, { Component } from 'react';
import {Box, Container, App, Column} from 'bloomer';
import {auth, charge} from '../http/Request';
import {StripeProvider, Elements} from 'react-stripe-elements';
import ChargeForm from './ChargeForm';
import AlertContainer from 'react-alert'


class Charge extends Component {
  
  componentWillReceiveProps(nextProps) {
    if(!nextProps.checkout.data.error) {
      this.showAlert(`Transaction Complete charge_id: ${nextProps.checkout.data.id}`) 
    } else {
      this.showAlert(`${nextProps.checkout.statusText}: ${nextProps.checkout.data.error.message}`) 
    }
  }

  showAlert(message) {
    this.msg.show(message, {
      time: 15000,
      type: 'success',
      icon: <svg className="icon" />
    })
  }

  render() {
    return (
      <Column>
        <StripeProvider apiKey="pk_test_KeVCXcElLEHnQ8LruHPFWqQY">
          <Elements>
            <ChargeForm onCheckout={this.props.onCheckout} />
          </Elements>
        </StripeProvider>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      </Column>
    );
  }
}

export default Charge;
