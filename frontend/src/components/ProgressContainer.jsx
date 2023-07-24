import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js/auto';
ChartJS.register(...registerables);

const ProgressContainer = ({userID}) => {
    //Keeping track to ensure _id value indeed has passed into this container
    console.log('userID track progress cont:', userID);

    /////Fetch api call that takes _id to extract quiz info/////
    const [quizProg, setQuizProg] = useState([]);

    //User quiz info api call
    const fetchUserData = async (id) => {
      const response = await fetch(`/api/users/${id}/quiz`);
      const userData = await response.json();
      //Another check to ensure the above did import correctly
      console.log('userData after fetch progress cont:', userData);
      //Converting JSON results into array of object
      const arr = [];
      for (const key in userData) {
        const arrObj = userData[key];
        arrObj['id'] = key;
        arr.push(arrObj)
      }
      //More checks to ensure we do have an array of objects after the previous operation
      const quizArr = arr;
      console.log(quizArr);
      if (Array.isArray(quizArr)){
        console.log('API resonse is an array');
      }
      else
        console.log('API response is not an array');

      return quizArr;
    };
  
    //Takes the _id value in userID and passes into fetchUserData
    //then sets the results of the fetch function to quizProg
    useEffect(() => {
      fetchUserData(userID)
        .then((data) => setQuizProg(data))
        .catch((error) => console.error('Error fetching user data:', error));
    }, [userID]);
  
    
    /////Prepare data for the chart using the quizProg variable we set above/////
    //The mapping is done during chart creation since here we extract the data needed
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
    //Pie chart that does similar things as above but in pie form with different data
    //BUG: Chart does not display, need to format container or change chart type
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
    
    //Return function that loads the charts with the data
    return(
      <div>
        <h1>Your Progress</h1>
        <Bar data={chartData} />
        <Bar data={pieChart} />
      </div>
    );
  }

export default ProgressContainer