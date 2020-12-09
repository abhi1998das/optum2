
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
    const ctx = document.getElementById("myChart3");
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Deep Sleep","Light Sleep","Awake"],
            datasets: [{
                label: 'Calories Intake',
                data: [6,4,14],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 20, 86, 0.2)',
                    'rgba(25, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 20, 86, 1)',
                    'rgba(25, 206, 86, 1)',
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
        
      <canvas id="myChart3" width="400" height="400" />
    </div>
  );
}