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
*/
import React from 'react';
//import AvgScoresChart from './AvgScoresChart'; //temporarily disabling this

function AvgScoresContainer(){
    /*
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
    */
   /*
    return(
        <div className='avgscores-container'>
            <h1>Average Score</h1>
            <Bar options = {chartOptions} data = {chartData}/>
        </div>
    )
    */
   return(
        <div className='avgscores-container'>
            <h1>Average Score</h1>
            
        </div>
   )
}

export default AvgScoresContainer