//This is the old code, saving it in case i need parts of it until charts
//are fully functional
/*
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

function AvgScoresContainer(){
    const [chartData, setChartData] = useState ({
        datasets: [],
    });

    const [chartOptions, setChartOptions]  = useState ({

    });

    useEffect(() => {
        setChartData({
            labels: ['Average Score'],
            datasets: [
                {
                    label: 'Average Quiz Score',
                    data: [80],
                }
            ],
        });
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    display: false,

                },
                title: {
                    display: false,
                },
            },
        });
    }, []);
    return(
        <div className='avgscores-container'>
            <h1>Average Score</h1>
            <Bar options = {chartOptions} data = {chartData}/>
        </div>
    )  
}*/

import React, {useState, useEffect} from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const AvgScoresContainer = () => {
   
    const [user, setUser] = useState([]);

    useEffect(() => {
      fetch('/api/users') 
        .then((response) => response.json())
        .then((data) => setUser(data)) 
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    /*
    useEffect(() => {
      // Check if data has been fetched before creating the chart
      if (user.length > 0) {
        createChart();
      }
    }, [user]);
  
    const createChart = () => {
      // Extract the necessary data from 'data' and format it for Chart.js
      const labels = user.map((item) => item.getQuizzes);
      const values = user.map((item) => item.quizAverage);
  
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar', // Choose the chart type (e.g., bar, line, pie, etc.)
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Quiz Averages',
              data: values,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          // Additional configuration options for the chart (e.g., title, axes, etc.)
        },
      });
    };
    */

    return(
        <div className='avgscores-container'>
            <h1>Average Score</h1>
                <div>
                    {user.length > 0 && (
                    <ul>
                        {user.map(user => (
                        <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                    )}
                </div>
        </div>
    );
}

export default AvgScoresContainer