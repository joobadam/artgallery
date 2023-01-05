import React from 'react'
import Artwork from './Artwork'
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2




function Artworks({data,filter}) {
  return (
    <Grid2 container spacing={3} sx={{width:"100%"}}>
        {data.records
        .filter((artwork)=> artwork.title.toLowerCase().includes(filter.toLowerCase()))
        .map((artwork,i) => {
            return <Grid2 key={i} xs={12} sm={6} md={4} lg={4} xl={2.4}> 
            <Artwork 
                classification={artwork.classification}  
                century={artwork.century} 
                culture={artwork.culture} 
                department={artwork.department} 
                primaryimageurl={artwork.primaryimageurl} 
                technique={artwork.technique} 
                title={artwork.title} 
                id={artwork.id}/>
            </Grid2>
        })}
   </Grid2>
  )
}

export default Artworks