import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js/auto';
ChartJS.register(...registerables);

const AvgScoresContainer = ({userID}) => {
  const [user, setUser] = useState([]);
  
  const fetchUserData = async (userID) => {
    const response = await fetch(`/api/users/${userID}/quizAvg`);
    const userData = await response.json();
    return userData;
  };

  useEffect(() => {
    // Fetch the user data when the component mounts
    fetchUserData(userID)
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, [userID]);

  
  // Prepare data for the chart
  const chartData = {
    labels: ['Average Quiz Score', 'Highest Quiz Score', 'Lowest Quiz Score'],
    datasets: [
      {
        label: 'Quiz Score',
        data: [80, 90, 70],//user.map((dataItem) => dataItem.getAverage), // Assuming value is available in the user data
        backgroundColor: '#fff04d',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  

  return(
    <div>
      <h1>Average Score</h1>
        <Bar data={chartData} />
    </div>
  );
}

export default AvgScoresContainer

/*
//This is the old code, saving just in case for posterity
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
import { useState, useEffect} from 'react';

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
}

//////////////////////////////////////////////////////////////////////
//some additional old code

    useEffect(() => {
      fetch('/api/users') 
        .then((response) => response.json())
        .then((data) => setUser(data)) 
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
      // Check if data has been fetched before creating the chart
      if (user.length > 0) {
        createChart();
      }
    }, [user, createChart]);
  
    const createChart = () => {
      // Extract the necessary data from 'data' and format it for Chart.js
      const labels = user.map((item) => item.label);
      const values = user.map((item) => item.value);
  
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar', // Choose the chart type (e.g., bar, line, pie, etc.)
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Users',
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