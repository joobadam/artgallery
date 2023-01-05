import React from 'react'
import { useState, useEffect} from 'react'
import GridLoader from 'react-spinners/GridLoader';

function LoadingMask() {

  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])

  return (
    <div style={{display:'flex', justifyContent: 'center',
    alignItems:'center'}}>
      {
        loading?      <GridLoader
        color={'#ff8700'}
        loading={loading}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />:[]
      }
    </div>
  )
}

export default LoadingMask