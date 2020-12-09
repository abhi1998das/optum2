
import React, { useEffect } from "react";
import Chart from "chart.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        float:'right'
      },
      paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          width:'500px',
          height:'500px'
      },
}));

export default function App() {
    const classes = useStyles();
    const theme = useTheme();
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1245,1890,2110,2340,2010,1590,1030],
            datasets: [{
                label: 'Calories Intake',
                data: [2010,1590,1030,1245,1890,2110,2340],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
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
        
      <canvas id="myChart" width="400" height="400" />
    </div>
  );
}