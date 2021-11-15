import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8e44ad'
    },
    secondary: {
      main: '#9b59b6'
    },
    info: {
      main: '#3498db'
    },
    warning: {
      main: '#e67e22'
    },
    error: {
      main: '#e74c3c'
    },
    success: {
      main: '#2ecc71'
    }
  },
  typography: {
    h1: {
      fontSize: '4.5rem'
    },
    coderoad: {
      fontSize: 18,
      fontFamily: 'serif'
    }
  }
})

console.log('theme', theme)
