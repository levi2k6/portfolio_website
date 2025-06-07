import { ThemeProvider, createTheme, CssBaseline, Container, Box, keyframes } from '@mui/material';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

// Create gradient animation keyframes
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// CSS noise texture as a data URI (very subtle)
const noiseTexture =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><filter id="n" x="0" y="0"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="200" height="200" fill="white" filter="url(%23n)" fill-opacity="0.04"/></svg>';

// Create a theme instance
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
});

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          background: 'linear-gradient(-45deg, #0a192f 0%, #1a365d 40%, #2c5282 70%, #2b6cb0 100%)',
          backgroundSize: '300% 300%',
          animation: `${gradientAnimation} 12s ease-in-out infinite`,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(10, 25, 47, 0.3)',
            zIndex: 0
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${noiseTexture})`,
            opacity: 0.5,
            pointerEvents: 'none',
            zIndex: 1
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          <Container maxWidth="lg">
            <Box component="main" sx={{ pt: 8 }}>
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;