import React from 'react';

function withCharge(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      this.setState({
        data: "Hello World"
      })
    }

    render() {
      return(
        <div>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export {withCharge}
