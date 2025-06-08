import { Box, Typography, Button, Container } from '@mui/material';
import { GitHub, LinkedIn, Description } from '@mui/icons-material';
import Resume from '../assets/Resume.pdf';

export default function Hero() {

  const handleResume = () => {
    window.open(Resume);
  }


  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 3,
          animation: 'fadeInUp 1s cubic-bezier(.23,1.01,.32,1) both',
          '@keyframes fadeInUp': {
            '0%': { opacity: 0, transform: 'translateY(40px)' },
            '100%': { opacity: 1, transform: 'none' },
          },
        }}
      >
        <Typography
          variant="h6"
          color="primary"
          sx={{ fontFamily: 'monospace', letterSpacing: 2 }}
        >
          Hi, my name is
        </Typography>
        
        <Typography
          variant="h1"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Levi Aranez
        </Typography>
        
        <Typography
          variant="h2"
          color="text.secondary"
          sx={{ fontWeight: 'bold' }}
        >
          I build software for people.
        </Typography>
        
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: '600px', mb: 4 }}
        >
          I'm a software developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<GitHub />}
            href="https://github.com/levi2k6"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<LinkedIn />}
            href="https://linkedin.com/in/arañez-levi-77a28136a"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<Description />}
            onClick={handleResume}
          >
            Resume 
          </Button>
        </Box>
      </Box>
    </Container>
  );
} 