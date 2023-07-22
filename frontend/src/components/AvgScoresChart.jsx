import React, {useState, useEffect} from 'react';
import Chart from 'chart.js/auto'; //Getting error from this "Module not found: Error: Can't resolve 'chart.js' in"

const AvgScoresChart = () => {
    const [user, setUser] = useState([]);
  
    // Fetch data from your backend API (replace 'api/data' with your actual API endpoint)
    useEffect(() => {
      fetch('/api/users/${userID}/quizAvg')
        .then((response) => response.json())
        .then((user) => setUser(user))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
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
    return <canvas id="myChart" width="400" height="200"></canvas>;
};

export default AvgScoresChart;