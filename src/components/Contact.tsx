import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import { GitHub, LinkedIn, Email, Twitter } from '@mui/icons-material';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setSnackbar({
      open: true,
      message: 'Thank you for your message! I will get back to you soon.',
      severity: 'success',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const socialLinks = [
    { icon: <GitHub />, label: 'GitHub', url: 'https://github.com/yourusername' },
    { icon: <LinkedIn />, label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { icon: <Twitter />, label: 'Twitter', url: 'https://twitter.com/yourusername' },
    { icon: <Email />, label: 'Email', url: 'mailto:your.email@example.com' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography variant="h2" gutterBottom align="center">
        Get In Touch
      </Typography>
      
      <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
        I'm currently open to new opportunities and collaborations. Whether you have a question
        or just want to say hi, I'll try my best to get back to you!
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
        <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
          <Typography variant="h5" gutterBottom>
            Send Me a Message
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              margin="normal"
            />
            
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
            />
            
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              margin="normal"
            />
            
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </Box>
        </Paper>
        
        <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
          <Typography variant="h5" gutterBottom>
            Connect With Me
          </Typography>
          
          <Typography variant="body1" color="text.secondary" paragraph>
            Feel free to reach out through any of these platforms. I'm always happy to connect
            with fellow developers and discuss potential opportunities.
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
                sx={{ justifyContent: 'flex-start', py: 1.5 }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Paper>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
} 