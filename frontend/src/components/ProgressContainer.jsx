import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js/auto';
ChartJS.register(...registerables);

const ProgressContainer = ({userID}) => {
    const [quizProg, setQuizProg] = useState([]);
    
    const fetchUserData = async (userID) => {
      const response = await fetch(`/api/users/646cbaeb3f3d85ce7fc495b9/quiz`);
      const userData = await response.json();
      const arr = [];
      for (const key in userData) {
        const arrObj = userData[key];
        arrObj['id'] = key;
        arr.push(arrObj)
      }
      const quizArr = arr;
      console.log(quizArr);
      if (Array.isArray(quizArr)){
        console.log('API resonse is an array');
      }
      else
        console.log('API response is not an array');

      return quizArr;
    };
  
    useEffect(() => {
      // Fetch the user data when the component mounts
      fetchUserData(userID)
        .then((data) => setQuizProg(data))
        .catch((error) => console.error('Error fetching user data:', error));
    }, [userID]);
  
    
    // Prepare data for the chart
    const chartData = {
      labels: quizProg.map((dataItem) => dataItem.quizName),
      datasets: [
        {
          label: 'Quiz Score',
          data: quizProg.map((dataItem) => dataItem.quizScore),
          backgroundColor: '#fff04d',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    }
    const pieChart = {
      labels: quizProg.map((dataItem) => dataItem.quizTopic),
      datasets: [
        {
          label: 'Topics Completed',
          data: quizProg.map((dataItem) => dataItem.quizName),
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
        <Bar data={pieChart} />
      </div>
    );
  }

export default ProgressContainer