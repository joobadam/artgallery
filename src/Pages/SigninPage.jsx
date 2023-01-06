import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';  
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box } from '@mui/system';
import { Container,TextField,FormControlLabel,Checkbox,Button } from '@mui/material';
import { Typography } from '@mui/material';



const SigninPage = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/home');
    }
  }, [user]);

  return (
   <Container style={{width:"100%",height:'100vh', display:"flex",justifyContent: "center",
   alignItems: "center"}}>
      <Box minWidth="350px" width="50%" maxHeight="600px" height='80vh' border="grey solid 1px" padding="30px"justifyContent="center" alignItems="center" display="flex" flexDirection="column" borderRadius="20px"   >
        <Box  width="300px" justifyContent="center" alignItems="center" display="flex">
        <IconButton onClick={handleGoogleSignIn} size="">
            <GoogleIcon color='inherit'/>
        </IconButton>
        <IconButton onClick={handleGoogleSignIn} size="large">
            <TwitterIcon color='inherit'/>
        </IconButton>
        <IconButton onClick={handleGoogleSignIn} size="large"  >
            <FacebookIcon />
        </IconButton>
        <Box>
          <Typography>
            Sign in
          </Typography>
          </Box >
          </Box>
            <Box component="form" noValidate sx={{ mt: 1 }} >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              size='medium'
              variant="contained"
              color='inherit'
              sx={{ mt: 3, mb: 2, }}
            >
              Sign In
            </Button>
            </Box>
          
        
      </Box>
      </Container>
    
  );
};

export default SigninPage;
