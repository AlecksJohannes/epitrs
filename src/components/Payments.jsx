import React, { Component } from 'react';
import {Box, Container, App, Table} from 'bloomer';
import Timestamp from 'react-timestamp';

class Payments extends Component {
  render() {
    const child = this.props.data.map((charge) => {
      return(
      <tr>
        <td></td>
        <td className="amount">${charge.amount}</td>
        <td>{charge.currency}</td>
        <td>{charge.description}</td>
        <td>{charge.customer}</td>
        <td><Timestamp time={charge.created} format="full"/></td>
      </tr>)
    })
    return(
      <Container>
        <Box>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Amount</th>
                <th></th>
                <th>Description</th>
                <th>Customer</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              { child }
            </tbody>
          </Table>
        </Box>
      </Container>
    )
  }
}

export default Payments;
