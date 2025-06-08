import { Box, Container, Typography, Paper } from '@mui/material';
import profileImage from '../assets/face.png';

export default function About() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 0,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 5,
              borderRadius: 5,
              background: 'rgba(20, 30, 50, 0.55)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
              backdropFilter: 'blur(8px)',
              border: '1.5px solid',
              borderImage: 'linear-gradient(120deg, #2196f3 0%, #21cbf3 100%) 1',
              position: 'relative',
              overflow: 'hidden',
              animation: 'fadeInUp 1s cubic-bezier(.23,1.01,.32,1) both',
              '@keyframes fadeInUp': {
                '0%': { opacity: 0, transform: 'translateY(40px)' },
                '100%': { opacity: 1, transform: 'none' },
              },
            }}
          >
            {/* Gradient accent bar */}
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: 5,
              background: 'linear-gradient(90deg, #2196f3 0%, #21cbf3 100%)',
              opacity: 0.7,
              zIndex: 1,
            }} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                position: 'relative',
                zIndex: 2,
              }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Levi Aranez"
                sx={{
                  width: 180,
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '3px solid #21cbf3',
                  boxShadow: '0 4px 24px 0 rgba(33,150,243,0.18)',
                  mb: 2,
                }}
              />
              <Typography variant="h2" gutterBottom align="center" sx={{
                fontWeight: 800,
                letterSpacing: 1,
                background: 'linear-gradient(90deg, #2196f3 0%, #21cbf3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 8px #0006',
              }}>
                About Me
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" align="left">
                Hello, I'm a passionate software developer with a keen interest in creating
                innovative solutions that make a difference. My journey in software development
                began after I graduated highshool when I realize that I hyperfixate a lot about 
                large and complex systems that I do not understand. That is why I chose this 
                career path for me to learn and uncover the truth of these enormous logistics that is  
                far greater than myself.
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" align="left">
                I specialize in backend, and I'm particularly interested in
                optimizing systems. I believe in writing clean, maintainable code and
                creating user-friendly applications that solve real-world problems.
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" align="left">
                When I'm not working, you can find me developing videogames for fun. I'm always
                eager to learn new technologies and take on challenging projects that
                push me to grow as a developer.
              </Typography>
              <Typography variant="h6" gutterBottom align="center" sx={{ mt: 3, fontWeight: 700 }}>
                Quick Facts:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                {[
                  '🎓 Education: Cordova Public College',
                  '💼 Experience: 4 months software development at Hivelogix Technologies',
                  '🌍 Location: Cordova Poblacion',
                  '🎯 Current Focus: To become a solid software engineer',
                ].map((fact, index) => (
                  <Typography key={index} variant="body1" color="text.secondary" align="center">
                    {fact}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
} 