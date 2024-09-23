import { useEffect, useState } from 'react';

import Header from './Components/Header';
import{ Outlet } from "react-router-dom"
import './App.css';
import UserContext from './Utlis/UserContext';


function App() {
  const [userName,setUserName] = useState();

  useEffect(()=>{
    const data = {
      name: "Annu5533"
    }
    setUserName(data.name)
  }, [])
  return (
    <UserContext.Provider value ={{loggedInUser: userName, setUserName}}>
    <>
      <Header />
      <Outlet/>
    </>
    </UserContext.Provider>
  );
}

export default App;
