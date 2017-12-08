import React from 'react';
import {fetchCharges} from '../../http/Request';
  
function withCharge(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (<WrappedComponent {...this.props} />)
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
