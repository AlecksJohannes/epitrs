import React, { Component } from 'react';
import {Box, Container, App, Table, Button} from 'bloomer';
import Timestamp from 'react-timestamp';
import Select from 'react-select';

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    }
  }
  handleSelection(value) {
    console.log(value)
    this.setState({
      selectedOption: value
    })
  }

  render() {
    const child = this.props.data.map((charge) => {
      return(
      <tr>
        <td><div className="visa"></div></td>
        <td className="amount">${charge.amount}</td>
        <td>{charge.currency}</td>
        <td>{charge.description}</td>
        <td>{charge.customer}</td>
        <td><Timestamp time={charge.created} format="full"/></td>
        <td><Button className="btn-refund" disabled={charge.refunded ? true : false} onClick={() => {this.props.requestRefund(charge.id)}}>{charge.refunded ? 'Refunded' : 'Refund'}</Button></td>
      </tr>)
    })
    if(this.props.onLoading) {
      return(<div id="loader"></div>)
    } else {
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
                      value={this.state.selectedOption}
                      onChange={(selectedOption) => {
                          this.props.filter(selectedOption.value);
                          this.handleSelection(selectedOption.value)
                        }
                      }
                      options={[
                        { value: JSON.stringify({isAscending: true, option: 'amount'}), label: 'Ascending' },
                        { value: JSON.stringify({isAscending: false, option: 'amount'}), label: 'Descending' },
                      ]}
                    />
                  </th>
                  <th>
                    <Select
                      name="form-field-name"
                      value={this.state.selectedOption}
                      onChange={(selectedOption) => {
                          this.props.filter(selectedOption.value);
                          this.handleSelection(selectedOption.value)
                        }
                      }
                      options={[
                        { value: JSON.stringify({isAscending: true, option: 'currency'}), label: 'Ascending' },
                        { value: JSON.stringify({isAscending: false, option: 'currency'}), label: 'Descending' },
                      ]}
                    />
                  </th>
                  <th></th>
                  <th></th>
                  <th>
                    <Select
                      name="form-field-name"
                      value={this.state.selectedOption}
                      onChange={(selectedOption) => {
                            this.props.filter(selectedOption.value); 
                            this.handleSelection(selectedOption.value)
                          }
                        }
                      options={[
                        { value: JSON.stringify({isAscending: true, option: 'created'}), label: 'Ascending' },
                        { value: JSON.stringify({isAscending: false, option: 'created'}), label: 'Descending' },
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
}

export default Payments;
