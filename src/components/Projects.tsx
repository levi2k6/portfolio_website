import { Box, Container, Typography, Card, CardContent, CardMedia, CardActions, Button, Chip, Stack } from '@mui/material';
import { GitHub, Launch, Code } from '@mui/icons-material';

import VGIS from '../assets/VGIS.jpeg';
import VGIS_mobile from '../assets/VGIS_mobile.png';
import BitBuddy from '../assets/BitBuddy.png';
import cpclibrary from '../assets/cpclibrary.jpeg';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  gitText: string;
  gitLogo: 'github' | 'gitlab' | 'code';
  websiteUrl?: string;  // Optional website URL
}

const projects: Project[] = [
  {
    title: "Virginia General Inventory System Frontend",
    description: "During my internship at Hivelogix Techonologies I collborated and helped develop this system, It is a website where employees can see and manage Virginia's inventory.",
    image: VGIS,
    technologies: ["React", "TypeScript", "Javascript", "Node.js", "AntD", "Webpack", "Docker"],
    githubUrl: "",
    gitText: "Close Source",
    gitLogo: "code",
    // websiteUrl: "https://vgis.hivelogix.com"
  },
  {
    title: "Virginia Warehouse Management System (Mobile)",
    description: "This is the second application that I helped develop during my internship. This is a mobile app where employees use this to manage Virginia's warehouse, It can scan incoming items, generate new barcode for transformed Items and more.",
    image: VGIS_mobile,
    technologies: ["React Native", "Android", "JavasScript"],
    githubUrl: "",
    gitText: "Close Source",
    gitLogo: "code",
    // websiteUrl: "https://vgis-mobile.hivelogix.com"
  },
  {
    title: "Bit Buddy (college capstone)",
    description: "A mobile game and a tool for parents to help them evaluate their child's cognitive competence through data collection while the kid is having fun playing the game.",
    image: BitBuddy, 
    technologies: ["godot", "sqlite", "gdscript"],
    githubUrl: "https://github.com/levi2k6/godot_capstone",
    gitText: "view github",
    gitLogo: "github",
    websiteUrl: "https://gobalman.itch.io/bit-buddy"
  },
  {
    title: "CPC Library Kiosk (college project)",
    description: "Website that my groupmates and I created for our school, where students can borrow a book in the library through the website.",
    image: cpclibrary, 
    technologies: ["godot", "sqlite", "gdscript"],
    githubUrl: "https://github.com/Scef24/PersonalProj/tree/master",
    gitText: "view github",
    gitLogo: "github",
  }  
  // Add more projects as needed
];

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography variant="h2" gutterBottom align="center">
        Featured Projects
      </Typography>
      
      <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
        Here are some of the projects I've worked on. Each project is a unique piece of development that showcases my skills and experience.
      </Typography>

      <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' } }}>
        {projects.map((project, index) => (
          <Card 
            key={index}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-8px)',
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
              sx={{ objectFit: 'cover' }}
            />
            
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom>
                {project.title}
              </Typography>
              
              <Typography variant="body2" color="text.secondary" paragraph>
                {project.description}
              </Typography>
              
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {project.technologies.map((tech, techIndex) => (
                  <Chip
                    key={techIndex}
                    label={tech}
                    size="small"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Stack>
            </CardContent>
            
            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button
                size="small"
                startIcon={
                  project.gitLogo === 'github' ? <GitHub /> :
                  project.gitLogo === 'gitlab' ? <Code /> : // Using Code icon as a placeholder for GitLab since MUI doesn't have a GitLab icon
                  <Code />
                }
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
               {project.gitText} 
              </Button>
              {project.websiteUrl && (
                <Button
                  size="small"
                  startIcon={<Launch />}
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
} 