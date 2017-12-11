import React, { Component} from 'react';
import Timestamp from 'react-timestamp';
import {Box, Container, App, Table, Button} from 'bloomer';

class Disputes extends Component {
  render() {
    console.log(this.props.disputes)
    if(this.props.disputes.length == 0) {
      return(<h1> No Data Available Please comeback later </h1>)
    } else {
      const child = this.props.data.map((dispute) => {
        return(
          <tr>
            <td></td>
            <td className="amount">${dispute.amount}</td>
            <td>{dispute.reason}</td>
            <td>{dispute.currency}</td>
            <td><Timestamp time={dispute.created} format="full"/></td>
          </tr>)
        })
        return(
          <Container>
            <Box>
              <Table>
                <thead>
                  <tr>
                  </tr>
                  <tr>
                    Amount
                  </tr>
                  <tr>
                    Reason
                  </tr>
                  <tr>
                    Currency
                  </tr>
                  <tr>
                    PAYMENT Date
                  </tr>
                </thead>
                <tbody>
                  { child }
                </tbody>
              </Table>
            </Box>
          </Container>
      );
    }
  }
}

export default Disputes;
