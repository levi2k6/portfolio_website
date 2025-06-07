import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const skillCategories = [
  {
    label: 'Backend',
    skills: ['PHP', 'Laravel', 'MySQL', 'SQLite', 'Express.js', 'MVC'],
  },

  {
    label: 'Frontend',
    skills: ['Reacts.js', 'Vue.js', 'HTML', 'CSS', 'Bootstrap', 'MUI'],
  },
  
  {
    label: 'Tools',
    skills: ['Git', 'VS Code', 'Docker', 'Node.js', 'Postman'],
  },
  {
    label: 'Others',
    skills: ['React Native', 'Python', 'Java', 'C', 'C++', 'Godot'],
  },
];

export default function Skills() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography variant="h2" gutterBottom align="center" sx={{ fontWeight: 800, letterSpacing: 1, textShadow: '0 2px 16px #0008' }}>
        Skills & Expertise
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
        Here are the technologies and tools I work with, organized by category.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
        {skillCategories.map((cat, idx) => (
          <Paper
            key={cat.label}
            elevation={0}
            sx={{
              p: 4,
              minWidth: 240,
              maxWidth: 270,
              width: '100%',
              borderRadius: 5,
              background: 'rgba(20, 30, 50, 0.55)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
              backdropFilter: 'blur(8px)',
              border: '1.5px solid',
              borderImage: 'linear-gradient(120deg, #2196f3 0%, #21cbf3 100%) 1',
              position: 'relative',
              overflow: 'hidden',
              animation: 'fadeInUp 1s cubic-bezier(.23,1.01,.32,1) both',
              animationDelay: `${0.1 + idx * 0.1}s`,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-6px) scale(1.03)',
                boxShadow: '0 12px 32px 0 rgba(33,150,243,0.18)',
              },
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
            }} />
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                mb: 2,
                mt: 1,
                background: 'linear-gradient(90deg, #2196f3 0%, #21cbf3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 8px #0006',
              }}
            >
              {cat.label}
            </Typography>
            <Stack spacing={1.2}>
              {cat.skills.map(skill => (
                <Box
                  key={skill}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 1,
                    py: 0.5,
                    borderRadius: 2,
                    transition: 'background 0.18s, color 0.18s',
                    cursor: 'default',
                    '&:hover': {
                      background: 'rgba(33,150,243,0.08)',
                      color: 'primary.main',
                    },
                  }}
                >
                  <ChevronRightIcon fontSize="small" sx={{ mr: 1, transition: 'transform 0.18s', '&:hover': { transform: 'translateX(3px)' } }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {skill}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        ))}
      </Box>
    </Container>
  );
} 