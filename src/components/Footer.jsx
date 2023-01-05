import React from 'react'
import { TableFooter } from '@mui/material';
import { Toolbar,Container,Grid,Box,Link } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Footer = () => {
  return (
    <footer>
        <Box bgcolor="text.secondary" color="white"
         px={{ xs:3, sm:10}}
         py={{ xs:5, sm:10}}
         sx={{marginTop:10}}>
            <Container maxWidth="lg">
                <Grid container spacing={12}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link href='/' color="inherit" sx={{textDecoration: "none"}}>
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color="inherit" sx={{textDecoration: "none"}}>
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color="inherit" sx={{textDecoration: "none"}}>
                                Privacy
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Messages</Box>
                        <Box>
                            <Link href='/' color="inherit" sx={{textDecoration: "none"}}>
                                Backup
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color="inherit" sx={{textDecoration: "none"}}>
                                History
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color="inherit" sx={{textDecoration: "none"}}>
                                Roll
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box>
                        <IconButton>
                        <PaletteIcon fontSize='large' color='warning'/>
                        </IconButton>
                        <IconButton>
                            <GitHubIcon fontSize='large' color='warning'/>
                        </IconButton>
                        <IconButton>
                            <TwitterIcon fontSize='large' color='warning'/>
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon fontSize='large' color='warning'/>
                        </IconButton>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>
  )
}


