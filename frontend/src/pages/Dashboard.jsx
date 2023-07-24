import React, {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import './Dashboard.css';
import ProgressContainer from '../components/ProgressContainer';
import AvgScoresContainer from '../components/AvgScoresContainer';
import { useAuthContext } from '../hooks/useAuthContext';
//import ImprovPtsContainer from '../components/ImprovPtsContainer';

const Dashboard = () =>{

  const [user, setUser] = useState([]);

  /////Convert authContext data and extract userName/////
  //Converts the JSON authContext() results into an array of objects
  const login = useAuthContext();
  const arr = [];
  for (const key in login) {
    const arrObj = login[key];
    arrObj['id'] = key;
    arr.push(arrObj)
  }
  //Extracts the userName key field from the array of objects into a regular array
  const userArr= arr.map((dataItem) => dataItem.userName);
  //Convert the array to just a standard variable with one value since the above array is saved as
  //[userName, undefined] and we need a single value variable to pass into the api call
  var userNamed;
  for (var i = 0; i <= userArr.length; i++)
  {
    userNamed = userArr[0];
  }  
  console.log(userNamed); //Keeping track to ensure the above operation performs as intended
 
  /////Using the userName from above to get user id ("_id") for the component api calls/////
  //Fetch user function takes the userNamed variable from when it's called and churns out the
  //user id ("_id") needed for the component api calls
  const fetchUser= async (userName) => {
    const response = await fetch(`api/users/name/${userName}`);
    const userData = await response.json();
    //Converting the JSON result into an array of objects
    const arr = [];
    for (const key in userData) {
      const arrObj = userData[key];
      arrObj['id'] = key;
      arr.push(arrObj)
    }
    //Extracting/Mapping _id to an array, since it extracts as a single value array no additional
    //operations are needed
    const userArr= arr.map((dataItem) => dataItem._id);
    return userArr;
  };

  //Use effect to take the userName and obtain the _id (userID) then set the user variable state
  //to the _id
  useEffect(() => {
    fetchUser(userNamed)
      .then((data) => setUser(data)) //takes the setUser from above
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  /*
  //Possible implementation of forcing the user to login screen if they have not logged in
  const [userID, setUserID] = useState([]);

  if (userID != user){
    return <Navigate replace to='/login' />
  }
  */

  //Return function where the user variable state from above now has the _id: value and will 
  //pass it to each container
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
      </div>
      <div className='ProgressContainer'>
        <ProgressContainer userID={user}/>
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