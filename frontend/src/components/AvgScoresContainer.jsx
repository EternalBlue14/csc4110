import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js/auto';
ChartJS.register(...registerables);

const AvgScoresContainer = ({userID}) => {
  const [quizAvg, setQuizAvg] = useState([]); //for average score
  const [score, setScore] = useState([]); //for high and low scores
  
  //Quiz Avg Score Set Up
  const fetchQuizAvg = async (userID) => {
    const response = await fetch(`/api/users/646cbaeb3f3d85ce7fc495b9/quizAvg`);
    const userData = await response.json();
    return userData;
  };
  
  useEffect(() => {
    fetchQuizAvg(userID) // Fetch the user data when the component mounts
      .then((data) => setQuizAvg(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, [userID]);

  //High & Low Score Set Up
  const fetchHighLowScore = async (userID) => {
    const response = await fetch(`/api/users/646cbaeb3f3d85ce7fc495b9/quiz`);
    const userData = await response.json();
    const arr = [];
    for (const key in userData) {
      const arrObj = userData[key];
      arrObj['id'] = key;
      arr.push(arrObj)
    }
    const quizArr = arr.map((dataItem) => dataItem.quizScore);
    console.log(quizArr);
    if (Array.isArray(quizArr)){
      console.log('API resonse is an array');
    }
    else
      console.log('API response is not an array');
    return quizArr;
  };

  useEffect(() => {
    fetchHighLowScore(userID) // Fetch the user data when the component mounts
      .then((data) => setScore(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, [userID]);

  /*
  const calcHighScore = async(score) => {
    for(var i = 0; i < score.length; i++){
      for (var j = 0; j < i; j++){
        if (score[i] > score[j].length) {
          quizHighSc = score;
          break;
        }
      }
    }
  }
  useEffect(() => {
    calcHighScore(score)
      .then((data) => setQuizHighSc(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, [score]);

  console.log(quizHighSc);
*/
  // Prepare data for the chart
  const chartData = {
    labels: ['Average Quiz Score', 'Highest Quiz Score', 'Lowest Quiz Score'],
    datasets: [
      {
        label: 'Quiz Score',
        data: quizAvg,//[quizAvgSc, quizHighSc, quizLowSc],
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