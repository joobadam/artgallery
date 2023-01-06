import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';




function Artwork({classification,century,culture,department,primaryimageurl,technique,title,id}){

   

  
  
/*   const fetchParams=(id) =>{
      fetch(`https://api.harvardartmuseums.org/object/${id}?apikey=${apiKey}`)
        .then(res => res.json())
        .then((data)=>setParamData(data)) 
      }  */

     
      
 return (
   


    
    <div>
        
        <Card sx={{ maxWidth: 345, width: "100",  height:550, margin:"auto", display:'flex',alignItems:'center', justifyContent:'space-between',flexDirection:'column'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={primaryimageurl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
          Century:{century}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
          Culture:{culture}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
          Department:{department}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary" >
          Classification:{classification}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton >
            <ThumbUpIcon fontSize='large' id={id}/>
        </IconButton>
        <Link to={`/artwork/${id}`}>
        <Button size="small" color='warning' id={id} variant='contained' >
            More informations
        </Button>
        </Link>
      </CardActions>
    </Card>
    </div>
  )
}

export default Artwork