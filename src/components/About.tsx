import { Box, Container, Typography, Paper } from '@mui/material';
import face from '../assets/face.png';


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
            elevation={3}
            sx={{
              p: 2,
              position: 'relative',
              width: 180,
              height: 180,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              overflow: 'hidden',
              mb: 2,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -8,
                left: -8,
                right: -8,
                bottom: -8,
                border: '2px solid',
                borderColor: 'primary.main',
                borderRadius: '50%',
                zIndex: 0,
              },
            }}
          >
            <Box
              component="img"
              src={face}
              alt="Levi Aranez"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </Paper>
          <Box sx={{ width: '100%' }}>
            <Typography variant="h2" gutterBottom align="center">
              About Me
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary" align="left">
              Hello, I'm a passionate software developer with a keen interest in creating
              innovative solutions that make a difference. My journey in software development
              began after graduating highshool when I realize that I hyperfixate a lot about 
              large and complex systems that I do not understand. That is why I chose this 
              career path for me to learn and uncover the truth of these enormous logistics 
              that is far greater than myself.
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
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom align="center">
                Quick Facts:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                {[
                  '🎓 Education: Cordova Public College',
                  '💼 Experience: 4 months internship at Hivelogix Technologies',
                  '🌍 Location: Cordova Poblacion',
                  '🎯 Current Focus: To become a solid software engineer',
                ].map((fact, index) => (
                  <Typography key={index} variant="body1" color="text.secondary" align="center">
                    {fact}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 