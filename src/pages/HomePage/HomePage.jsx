import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar, Container, ButtonGroup } from '@mui/material';

const HomePage = () => (
  <Box
    sx={{
      backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-watercolor-background_23-2149038179.jpg?semt=ais_hybrid)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <AppBar position="static" sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Group Project
        </Typography>

        <ButtonGroup variant="text" color="inherit" sx={{ ml: 2 }}>
          <Button>About</Button>
          <Button>Profile</Button>
          <Button>Contact</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>

    <Container
      maxWidth="lg"
      sx={{ textAlign: 'center', mt: 4, bgcolor: 'rgba(255, 255, 255, 0.8)', p: 4, borderRadius: 2, }}>

      <Typography 
      variant="h2" gutterBottom>
        Welcome to Our Project
      </Typography>

      <Typography 
      variant="h5" gutterBottom>
        Explore the features and enjoy a seamless experience.
      </Typography>

      <Button 
      variant="contained" 
      sx={{ mt: 2, backgroundColor: '#FA8072', color: '#fff','&:hover': { backgroundColor: '#E57373', },}}>
        Get Started
      </Button>
    </Container>

    <Box
      component="footer"
      sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', p: 3, mt: 'auto', textAlign: 'center', color: 'white', }}>
      <Typography variant="body2">© 2024 Group Project. All Rights Reserved.</Typography>
    </Box>
  </Box>
);

export default HomePage;


