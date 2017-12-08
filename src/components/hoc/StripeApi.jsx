import React from 'react';
import {fetchCharges, charge} from '../../http/Request';
  
function withCharge(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        checkoutData: null
      }
    }
    handleCheckout(amount, description, currency) {
      charge(amount, description, currency).then((response) => {
        this.setState({
          checkoutData: response
        })
      })
    }

    render() {
      return (<WrappedComponent {...this.props}  onCheckout={this.handleCheckout.bind(this)} checkout={this.state.checkoutData}/>)
    }
  }
}

function withCharges(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: []
      }
    }
    componentDidMount() {
      fetchCharges().then((response) => {
        this.setState({
          data: response.data
        })
      })
    }

    render() {
      return (<WrappedComponent {...this.props} data={this.state.data} />)
    }
  }
}


export {withCharge, withCharges}
