import { Box, Container, Typography } from '@mui/material';
import React from 'react';

type PageTitleProps = {
  title: string;
  subtitle?: string;
};

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        pt: 2,
        pb: 1,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ fontWeight: 800 }}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          paragraph
        >
          {subtitle}
        </Typography>
      </Container>
    </Box>
  );
}
