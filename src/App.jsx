import { useContext, useEffect, useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from './Router';
import { DataContext } from './components/dataProvider/DataProvider';
import { type } from './utility/Action.type';
import { auth } from "./utility/Firebase"

function App() {
  const [{user} , dispatch] = useContext(DataContext)
 useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //console.log(authUser)
        dispatch({
          type: type.SET_USER,
          user: authUser
        })
      }else{
        dispatch({
          type: type.SET_USER,
          user: null
        })
      }
    })
   
   
 }, [])
  return (
    <>
      <Routing />
    </>
  );
}

export default App
