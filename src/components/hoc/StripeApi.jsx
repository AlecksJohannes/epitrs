import React from 'react';
import {fetchCharges, charge, refund, fetchDisputes} from '../../http/Request';
import _ from 'lodash';
  
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

function withDisputes(WrappedComponent) {
  return class extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        data: [] 
      }
    }

    componentDidMount() {
      fetchDisputes().then((response) => {
        this.setState({
          data: response.data
        });
      })   
    }

    render() {
      return (
        <WrappedComponent {...this.props} disputes={this.state.data} />
      )
    }
  }
}

function withCharges(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        refund: null
      }
    }
    componentDidMount() {
      fetchCharges().then((response) => {
        this.setState({
          data: response.data
        })
      })
    }

    sortCharges(sort) {
      var sortedCharges
      if(sort.isAscending) {
        sortedCharges = _.sortBy(this.state.data, sort.option)
      } else {
        sortedCharges = _.sortBy(this.state.data, sort.option).reverse()
      }
      this.setState({
        data: sortedCharges
      })
    }

		requestRefund(id) {
      refund(id).then((response) => {
        this.setState({
          refund: response
        })
      }) 
    }		

    render() {
      return (<WrappedComponent {...this.props} data={this.state.data} filter={this.sortCharges.bind(this)} requestRefund={this.requestRefund.bind(this)} />)
    }
  }
}


export {withCharge, withCharges, withDisputes}
