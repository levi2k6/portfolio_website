import { AppBar, Toolbar, Button, Box, useScrollTrigger, Slide } from '@mui/material';
import { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, activeSection, setActiveSection]);

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: 'transparent',
          background: 'rgba(20, 30, 50, 0.65)',
          boxShadow: scrolled ? 2 : 0,
          backdropFilter: 'blur(12px)',
          borderBottom: '2px solid',
          borderImage: 'linear-gradient(90deg, #2196f3 0%, #21cbf3 100%) 1',
          transition: 'all 0.3s cubic-bezier(.23,1.01,.32,1)',
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleClick(item.id)}
                sx={{
                  color: 'text.primary',
                  position: 'relative',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  letterSpacing: 1,
                  px: 2,
                  background: 'none',
                  transition: 'color 0.2s',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: activeSection === item.id ? '100%' : '0%',
                    height: '3px',
                    bottom: 0,
                    left: 0,
                    borderRadius: 2,
                    background: activeSection === item.id
                      ? 'linear-gradient(90deg, #2196f3 0%, #21cbf3 100%)'
                      : 'transparent',
                    transition: 'width 0.3s cubic-bezier(.23,1.01,.32,1)',
                  },
                  '&:hover': {
                    color: 'primary.main',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
} 