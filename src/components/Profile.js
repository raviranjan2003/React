import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createActionForChangeStatus } from "../actions/Actions";

const Profile = () => {
  //  const { name,age,status } = useSelector((state)=> {
  //   return state;
  //   })
  
  const { name,age,status } = useSelector((state)=> state);

  const dispatch = useDispatch();
  const updateAge = (age)=>{
      dispatch({type:"UPDATE_AGE",payload:age})
  }
  const updateName = (name)=>{
      dispatch({type:"UPDATE_NAME",payload:name})
  }
  //creating action using separate file Actions.js
  const updateStatus = (status)=>{
      dispatch(createActionForChangeStatus(status))
  }
  return (
    <div>
        <h1>Hyy, I am {name}</h1>
        <h2>My age is {age} </h2>
        <h3>My status is {status}</h3>
        <button onClick={()=>updateAge(40)}>Update Age</button>
        <button onClick={()=>updateName("Ranjan")}>Update Name</button>
        <button onClick={()=>updateStatus("Programmer")}>Update Status</button>
    </div>
  )
}

export default Profile