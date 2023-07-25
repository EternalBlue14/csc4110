import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js/auto';
ChartJS.register(...registerables);

const AvgScoresContainer = ({userID}) => {
  //Keeping track to ensure _id value indeed has passed into this container
  console.log('userID track avgscores cont:', userID);

  /////Fetch api call that takes _id to extract quiz average score/////
  const [quizAvg, setQuizAvg] = useState([]);
  
  //Quiz average score api call
  const fetchQuizAvg = async (id) => {
    const response = await fetch(`/api/users/${id}/quizAvg`);
    const userData = await response.json();
    console.log('userData avgScore value after api call:', userData);
    return userData;
  };
  
  //Use effect sets quiz average value to the quizAvg variable which will be used to
  //build the chart
  useEffect(() => {
    fetchQuizAvg(userID) // Fetch the user data when the component mounts
      .then((data) => setQuizAvg(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, [userID]);

  console.log('quizAvg value before passing to chart:', quizAvg);
  /////Prepare data for the chart using the quizAvg variable we set above/////
  // BUG: For some reason two labels on x axis appears despite there being data for only one
  const chartData = {
    labels: ['Average Quiz Score'],
    datasets: [
      {
        label: 'Quiz Score',
        data: quizAvg,
        backgroundColor: '#fff04d',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 1, // Specify the maximum number of ticks/labels on the X-axis
        },
      },
    },
  };

  //Return function that loads the chart with the data
  return(
    <div>
      <h1>Average Score</h1>
        <Bar data={chartData} options={chartOptions} />
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

  //High & Low Score Set Up
  //This section is no longer necessary as this information is displayed on the progress container
  //keeping it for posterity/future maintenance
  /*
  const [score, setScore] = useState([]); //for high and low scores
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