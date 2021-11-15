import React from 'react'

import { makeStyles } from '@mui/styles'

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
    width: 400
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
      >
        CLICK ME
      </Button>

    </div>
  )
}

export default App
