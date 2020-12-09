
import React, { useEffect } from "react";
import Chart from "chart.js";
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        float:'right',
      },
      paper: {
          position:'relative'
      },
}));

export default function App() {
    const classes = useStyles();
    const theme = useTheme();
  useEffect(() => {
    const ctx = document.getElementById("myChart1");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Saturday','sunday','Monday','Tuesday','Wednesday','Thursday','Friday'],
            datasets: [{
                label: 'Steps Walked',
                data: [14536,25534,23537,32273,25363,2345,23547],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  });
  return (
    <div className={classes.root}>
        
      <canvas  className={classes.paper} id="myChart1" width="400" height="400"  />
    </div>
  );
}