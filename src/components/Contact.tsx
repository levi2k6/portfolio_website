import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
} from '@mui/material';
import { GitHub, LinkedIn, Email, Twitter, Phone } from '@mui/icons-material';

export default function Contact() {
  const socialLinks = [
    { icon: <GitHub />, label: 'GitHub', url: 'https://github.com/levi2k6' },
    { icon: <LinkedIn />, label: 'LinkedIn', url: 'https://linkedin.com/in/arañez-levi-77a28136a' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}>
        <Paper elevation={3} sx={{
          p: 4,
          minWidth: 350,
          maxWidth: 400,
          width: '100%',
          borderRadius: 5,
          background: 'rgba(20, 30, 50, 0.55)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
          backdropFilter: 'blur(8px)',
          border: '1.5px solid',
          borderImage: 'linear-gradient(120deg, #2196f3 0%, #21cbf3 100%) 1',
          position: 'relative',
          animation: 'fadeInUp 1s cubic-bezier(.23,1.01,.32,1) both',
          '@keyframes fadeInUp': {
            '0%': { opacity: 0, transform: 'translateY(40px)' },
            '100%': { opacity: 1, transform: 'none' },
          },
        }}>
          <Typography variant="h5" gutterBottom>
            Connect With Me
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Feel free to reach out through any of these platforms. I'm always happy to connect with fellow developers and discuss potential opportunities.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="outlined"
                startIcon={link.icon}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  justifyContent: 'flex-start',
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 2,
                  transition: 'background 0.2s, color 0.2s',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #2196f3 0%, #21cbf3 100%)',
                    color: '#fff',
                    borderColor: 'transparent',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              py: 1.5,
              px: 2,
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 2,
              minHeight: '48px'
            }}>
              <Email sx={{ color: 'primary.main' }} />
              <Typography sx={{ fontWeight: 600 }}>
                kogmawa@gmail.com
              </Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              py: 1.5,
              px: 2,
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 2,
              minHeight: '48px'
            }}>
              <Phone sx={{ color: 'primary.main' }} />
              <Typography sx={{ fontWeight: 600 }}>
                09167623624
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
} 