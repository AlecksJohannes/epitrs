import React, { Component } from 'react';
import {Box, Container, App, Table, Button} from 'bloomer';
import Timestamp from 'react-timestamp';
import Select from 'react-select';

class Payments extends Component {
  render() {
    const child = this.props.data.map((charge) => {
      console.log(charge)
      return(
      <tr>
        <td></td>
        <td className="amount">${charge.amount}</td>
        <td>{charge.currency}</td>
        <td>{charge.description}</td>
        <td>{charge.customer}</td>
        <td><Timestamp time={charge.created} format="full"/></td>
        <td><Button className="btn-refund" disabled={charge.refunded ? true : false} onClick={() => {this.props.requestRefund(charge.id)}}>{charge.refunded ? 'Refunded' : 'Refund'}</Button></td>
      </tr>)
    })
    return(
      <Container>
        <Box>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>
                  Amount
                </th>
                <th>Currency
                </th>
                <th>Description</th>
                <th>Customer</th>
                <th>Date
                </th>
                <th>Refund</th>
              </tr>
              <tr>
                <th></th>
                <th> 
                  <Select
                    name="form-field-name"
                    onChange={(selectedOption) => this.props.filter(selectedOption.value)}
                    options={[
                      { value: {isAscending: true, option: 'amount'}, label: 'Ascending' },
                      { value: {isAscending: false, option: 'amount'}, label: 'Descending' },
                    ]}
                  />
                </th>
                <th>
                  <Select
                    name="form-field-name"
                    onChange={(selectedOption) => this.props.filter(selectedOption.value)}
                    options={[
                      { value: {isAscending: true, option: 'currency'}, label: 'Ascending' },
                      { value: {isAscending: false, option: 'currency'}, label: 'Descending' },
                    ]}
                  />
                </th>
                <th></th>
                <th></th>
                <th>
                  <Select
                    name="form-field-name"
                    onChange={(selectedOption) => this.props.filter(selectedOption.value)}
                    options={[
                      { value: {isAscending: true, option: 'created'}, label: 'Ascending' },
                      { value: {isAscending: false, option: 'created'}, label: 'Descending' },
                    ]}
                  />
                </th>
                <th></th>
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
