import React, {useState, useEffect} from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';
import './Dashboard.css';
import ProgressContainer from '../components/ProgressContainer';
import AvgScoresContainer from '../components/AvgScoresContainer';
//import ImprovPtsContainer from '../components/ImprovPtsContainer';

const Dashboard = () =>{
  const {user} = useAuthContext();
  /*
  const [userID, setUserID] = useState([]);

  if (userID != user){
    return <Navigate replace to='/login' />
  }
  */

  return (
    <div>
      <div>
        <h1>Dashboard</h1>
      </div>
      <div className='ProgressContainer'>
        <ProgressContainer />
      </div>
      <div className='AvgScoresContainer'>
        <AvgScoresContainer userID={user} />
      </div>
    </div>
  )
}

export default Dashboard

//Old code below
/*
export default function Dashboard() {
  const {userID} = useAuthContext();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('/api/users/', {

    }
    ) 
      .then((response) => response.json())
      .then((data) => setUser(data)) //takes the setUser from above
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (user != userID){
    return <Navigate replace to='/login' />
  }

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
*/