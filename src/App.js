import React from 'react'

import { makeStyles } from '@mui/styles'

import { Delete as DeleteIcon } from '@mui/icons-material'

import { Button } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 400,
    '& .MuiButton-startIcon': {
      color: theme.palette.error.main
    },
    '& .MuiTouchRipple-rippleVisible': {
      backgroundColor: theme.palette.error.main
    }
  }
}), { name: 'App' })

export const App = () => {
  const classes = useStyles()

  console.log(classes)

  return (
    <div
      className={classes.root}
    >

      <Button
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        CLICK ME
      </Button>

    </div>
  )
}

export default App
