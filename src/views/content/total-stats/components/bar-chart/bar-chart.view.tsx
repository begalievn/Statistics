import React from 'react';
import { Bar } from 'react-chartjs-2';
import {observer} from 'mobx-react-lite';


export const BarChart = observer((): JSX.Element => (
  <div>
    <Bar
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
          label: '# of votes',
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            "#ffbb11",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0"
          ]
        }]
      }}
      height={400}
      width={500}
      // options={{
      //   maintainAspectRatio: false
      // }}
    />
  </div>
));
