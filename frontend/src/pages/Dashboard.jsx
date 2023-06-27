import React from 'react';
import './Dashboard.css';
import ProgressContainer from '../components/ProgressContainer';
import AvgScoresContainer from '../components/AvgScoresContainer';
import ImprovPtsContainer from '../components/ImprovPtsContainer';

export default function Dashboard() {
    return (
      <>
      <h1>Dashboard</h1>
      <ProgressContainer />
      <AvgScoresContainer />
      <ImprovPtsContainer />
      </>
    )
  }