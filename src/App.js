
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import ArtworkPage from './Pages/ArtworkPage';
import FavoritesPage from './Pages/FavoritesPage';
import LandingPage from './Pages/LandingPage';
import SigninPage from './Pages/SigninPage';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';




function App() {
  
  const [data,setData] = useState([])
  const [filter,setFilter] = useState("")
  

  
  
  const apiKey = `6bdd0f06-3c54-4960-b04d-4ad36cf5eea4`

  const fetchData = () =>{
    fetch(`https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=100`)
      .then(res => res.json())
      .then((data) => {
        setTimeout(() =>{
          setData(data)
         },3000)})
  }
 
  return (

      <AuthContextProvider>
          <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/signin' element={<SigninPage/>} />               
              <Route path='/home'element={ <HomePage
               fetchData={fetchData}
               data={data}
               setData={setData}
               filter={filter} 
               setFilter={setFilter}/> }/>

              <Route path='/artwork/:id'element={ <ArtworkPage/> }/>
              
              <Route path='/favorite'element={<FavoritesPage/>}/>
                        
          </Routes>
        </AuthContextProvider>
       
  );
}

export default App;
