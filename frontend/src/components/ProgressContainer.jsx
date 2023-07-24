import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js/auto';
ChartJS.register(...registerables);

const ProgressContainer = ({userID}) => {
    const [user, setUser] = useState([]);
    
    const fetchUserData = async (userID) => {
      const response = await fetch(`/api/users/${userID}/quiz`);
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
      labels: ['Quiz 1', 'Quiz 2', 'Quiz 3'],
      datasets: [
        {
          label: 'Quiz Score',
          data: [80, 90, 70],//user.map((dataItem) => dataItem.getQuizzes), // Assuming value is available in the user data
          backgroundColor: '#fff04d',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    
  
    return(
      <div>
        <h1>Your Progress</h1>
          <Bar data={chartData} />
      </div>
    );
  }

export default ProgressContainer