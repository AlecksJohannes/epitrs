import React, { Component } from 'react';
import {Columns, Column, Box, Container} from 'bloomer';
import {Line} from 'react-chartjs-2';
import _ from 'lodash';

class Home extends Component {
  render() {
    var arr = []
    _.forEach(this.props.data, function(e, k) {
      arr.push(new Date(e.created* 1000));
    });
    var amounts = _.map(this.props.data, 'amount');
    const data = {
      labels: arr,
      datasets: [
        {
          label: 'Gross Volume',
          fill: false,
          lineTension: 0.1,
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: [
            'white'
          ],
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'white',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'white',
          pointHoverBorderColor: 'white',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: amounts,
          steppedLine: false,
          scaleShowGridLines : false
        }
      ]
    };
    return (
      <Column>
        <Container>
          <Line data={data} options={{
              legend: {
                labels: {
                  fontColor: 'white',
                  backgroundColor: 'white'
                }
              },
              scales : {
                  xAxes: 
                    [{
                      ticks: {
                        fontColor: 'white'
                      },
                      gridLines : {
                          display : false,
                      },
                      type: 'time',
                      time: {
                      tooltipFormat:'MM/DD/YYYY',
                        displayFormats: {
                           'millisecond':'HH:mm:ss',
                           'second': 'HH:mm:ss',
                           'minute': 'HH:mm:ss',
                           'hour': 'HH:mm:ss',
                           'day': 'HH:mm:ss',
                           'week': 'HH:mm:ss',
                           'month': 'HH:mm:ss',
                           'quarter': 'HH:mm:ss',
                           'year': 'HH:mm:ss',
                        }
                      }
                    }],
                  yAxes: 
                    [{
                      ticks: {
                        fontColor: 'white'
                      },
                      gridLines: {
                        display: false
                      }
                    }]
                  
              }
          }} height={50} width={200}/>
        </Container>
      </Column>
    );
  }
}

export default Home;
