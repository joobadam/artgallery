import React, { useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Artworks from '../components/Artworks'
import LoadingMask from '../components/LoadingMask'
import { Box } from '@mui/material'


function HomePage({fetchData,data,setData,filter,setFilter}) {

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
             <Header data={data} setData={setData} filter={filter} setFilter={setFilter}/>
            {data.records? <Artworks
                data={data}
                filter={filter}/> : <LoadingMask/>}
            <Footer/>
    </div>
  )
}

export default HomePage