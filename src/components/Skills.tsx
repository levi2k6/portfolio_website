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
      <Typography variant="h2" gutterBottom align="center">
        Skills & Expertise
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
        Here are the technologies and tools I work with, organized by category.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
        {skillCategories.map((cat) => (
          <Paper key={cat.label} elevation={3} sx={{ p: 3, minWidth: 220, background: 'rgba(10,25,47,0.7)' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, letterSpacing: 1 }}>
              {cat.label}
            </Typography>
            <Stack spacing={1}>
              {cat.skills.map(skill => (
                <Box key={skill} sx={{ display: 'flex', alignItems: 'center' }}>
                  <ChevronRightIcon fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>{skill}</Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        ))}
      </Box>
    </Container>
  );
} 