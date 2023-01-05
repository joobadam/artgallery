import React, {useState,useEffect}from 'react'
import { TextField } from '@mui/material'
import { Stack } from '@mui/material'
import { Autocomplete } from '@mui/material'
import {AppBar, Toolbar} from '@mui/material';
import { Box } from '@mui/system';
import PaletteIcon from '@mui/icons-material/Palette';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { InputBase } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link } from 'react-router-dom';



export const Header = ({filter,setFilter}) => {


/* 
    //AutoComplete része
    const [search,setSearch] = useState("")
     const apiKey = `6bdd0f06-3c54-4960-b04d-4ad36cf5eea4`
    const [searchData,setSearchData]= useState([])
    useEffect(()=>{
        fetch(`https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=100`)
            .then(res => res.json())
            .then(data => setSearchData(data.records))
    },[]) */
 
    
  return (
   
    <Box sx={{marginBottom:40}}  >
        <Container maxWidth="lg" >
                <Grid container spacing={4} >
                    <AppBar sx={{background:'black',height:120,display:'flex',justifyContent:"center"}} >
                    <Toolbar >
                    <Grid item xs={12} sm={1}>
                        <Link to='/home' style={{color:"white"}} >
                        <IconButton color='inherit'>
                            <PaletteIcon fontSize='medium'/>
                        </IconButton>
                        </Link>
                        <Typography>Home</Typography>
                    </Grid>
                    <Grid item xs={12} sm={1} >
                        <IconButton color='inherit' >
                            <LogoutIcon fontSize='medium' />
                        </IconButton>
                        <Typography>Logout</Typography>
                 </Grid>
                    <Grid item xs={12} sm={1} >
                        <Link to="/favorite" style={{color:"white"}}>
                        <IconButton color='inherit'>
                            <ThumbUpIcon fontSize='medium'/>
                        </IconButton>
                        </Link>
                        <Typography>My Favorites</Typography>
                 </Grid>
 
        <Grid item xs={12} sm={6} >
        <Stack sx={{maxWidth: 300,marginLeft:'auto'}} >

{/*    
            ///AutoComplete 

        <Autocomplete   
            id='searchArt' getOptionLabel={(searchData) => `${searchData.title}`}
            options={searchData} 
            sx={{maxWidth: 300,background:'white'}} 
            size='small'  
            isOptionEqualToValue={(option,value)=> option.title === value.title}
            noOptionsText={"No available artwork"} renderOption={(props, searchData)=> (
                <Box component="li" {...props} key={searchData.id} >
                    {searchData.title} 
                </Box>
        )}
        renderInput={(params)=> <TextField value={search} onKeyDown={e=> setSearch(e.target.value)}{...params}  label="Search for an artwork" />}
       

            ///
        /> */}
        <Grid item xs={12} sm={12} >
        <Box style={{borderBottom:'white solid 1px'}}>
            <IconButton>
                <SearchIcon color='warning' fontSize='large'/>    
            </IconButton>
          <InputBase placeholder='Search for an artwork'
                style={{ color:'white'}}
                value={filter}
                onChange={(e)=>{
                    setFilter(e.target.value)
                }}
          />
        </Box>
        </Grid>
         </Stack> 
         </Grid>
        </Toolbar>
        </AppBar>
        </Grid>
        </Container>
    </Box>
    
  )
}
