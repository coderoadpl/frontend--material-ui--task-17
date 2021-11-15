import React from 'react'

import { makeStyles } from '@mui/styles'

import { Delete as DeleteIcon } from '@mui/icons-material'

import { Button } from '@mui/material'

const useStyles = makeStyles(() => ({
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
      color: 'red'
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
