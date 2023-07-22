import React from 'react';
import './Dashboard.css';
import ProgressContainer from '../components/ProgressContainer';
import AvgScoresContainer from '../components/AvgScoresContainer';
//import ImprovPtsContainer from '../components/ImprovPtsContainer';

export default function Dashboard() {
    return (
      <div>
        <div>
          <h1>Dashboard</h1>
        </div>
        <div className='ProgressContainer'>
          <ProgressContainer />
        </div>
        <div className='AvgScoresContainer'>
          <AvgScoresContainer />
        </div>
      </div>
    )
  }