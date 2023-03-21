import React from 'react';
import { Backdrop, CircularProgress, useTheme } from '@mui/material';

export default function BlockUi() {
  const theme = useTheme();

  const styles = {
    backdrop: {
      color: '#fff',
      zIndex: theme.zIndex.modal,
    },
  };
  return (
    <Backdrop sx={styles.backdrop} open>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
