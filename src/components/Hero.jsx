import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Typography } from '@mui/material';

function Hero() {
  return (
    <Grid2 container spacing={3} sx={{width:"95%",margin:"140px auto"}}>
        <Grid2  xs={12} sm={6} md={5} lg={4} xl={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center" margin="0 auto">
            <Typography variant='h3' marginBottom="20px">
                "Art enables us to find ourselves and lose ourselves at the same time"
            </Typography>
            <Typography variant='h4'>
                Thomas Merton
            </Typography>
        </Grid2>
        <Grid2  xs={12} sm={6} md={5} lg={4} xl={4} width="100%">
            <img src="https://images.unsplash.com/photo-1535385793343-27dff1413c5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" alt="" style={{minWidth:"350px",width:"100%"}} />
        </Grid2>
    </Grid2>
  )
}

export default Hero