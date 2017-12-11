import React, { Component } from 'react';
import {Box, Container, App, Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardTitle, ModalCardBody} from 'bloomer';
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  PaymentRequestButtonElement,
  StripeProvider,
  Elements,
  injectStripe,
} from 'react-stripe-elements';
import {charge} from '../http/Request';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ChargeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetchingToken: false,
      isCheckingOut: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.stripe.createToken().then(payload => {
      localStorage.setItem('cardToken', payload.token.id);
      this.setState({
        isFetchingToken: true
      }, () => {
        setTimeout(function() {
          this.setState({
            isFetchingToken: false,
            isCheckingOut: true
          }, () => {
            this.props.onCheckout(this.state.amount, this.state.description, this.state.currency)
            this.setState({
              isCheckingOut: false
            })
          })
        }.bind(this), 2000)
      })
    })
  }

  setFormData(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {
    const createOptions = (fontSize: string) => {
      return {
        style: {
          base: {
            fontSize,
            color: '#424770',
            letterSpacing: '0.025em',
            fontFamily: 'Source Code Pro, monospace',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      };
    };
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Card number
            <CardNumberElement
              {...createOptions(this.props.fontSize)}
            />
          </label>
          <label>
            Expiration date
            <CardExpiryElement
              {...createOptions(this.props.fontSize)}
            />
          </label>
          <label>
            CVC
            <CardCVCElement
              {...createOptions(this.props.fontSize)}
            />
          </label>
          <label>
            Postal code
            <PostalCodeElement
              {...createOptions(this.props.fontSize)}
            />
          </label>
          <label>
            Currency
            <Select
              name="form-field-name"
              value={this.state.currency}
              onChange={(selectedOption) => this.setFormData("currency", selectedOption.value)}
              options={[
                { value: 'usd', label: 'USD' },
                { value: 'eur', label: 'EUR' },
                { value: 'qar', label: 'QAR' },
                { value: 'hkd', label: 'HKD' },
                { value: 'sll', label: 'SLL' },
              ]}
            />
          </label>
          <label>
            Amount
            <div className=" StripeElement StripeElement--empty">
              <input type="number" className="InputElement is-empty" onChange={(e) => {this.setFormData("amount", e.target.value)}}/>
            </div>
          </label>
          <label>
            Description
            <div className=" StripeElement StripeElement--empty">
              <input type="text" className="InputElement is-empty" placeholder="Description" onChange={(e) => {this.setFormData("description", e.target.value)}}/>
            </div>
          </label>
          <button>Pay</button>
        </form>
        <Modal isActive={this.state.isFetchingToken || this.state.isCheckingOut}>
          <ModalBackground />
          <ModalCard>
            <ModalCardHeader>
              <ModalCardTitle>{this.state.isFetchingToken ? 'Generating Token .......' : 'Handling Charging ...' }
              </ModalCardTitle>
            </ModalCardHeader>
            <ModalCardBody>
              <div id="preloader">
                <div id="loader"></div>
              </div>
            </ModalCardBody>
          </ModalCard>
        </Modal>
      </div>

    )
  }
}

export default injectStripe(ChargeForm);

