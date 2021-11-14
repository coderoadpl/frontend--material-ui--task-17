import React from 'react'

import { Button } from '@mui/material'

import { Logout as LogoutIcon } from '@mui/icons-material'

export const App = () => {
  return (
    <div>
      <Button
        variant={'contained'}
        color={'primary'}
        startIcon={<LogoutIcon />}
      >
        PRIMARY
      </Button>
      <br />
      <Button
        variant={'contained'}
        color={'secondary'}
        endIcon={<LogoutIcon />}
      >
        SECONDARY
      </Button>
      <br />
      <Button
        variant={'contained'}
        color={'info'}
        endIcon={<LogoutIcon />}
      >
        INFO
      </Button>
      <br />
      <Button
        variant={'contained'}
        color={'warning'}
        endIcon={<LogoutIcon />}
      >
        WARNING
      </Button>
      <br />
      <Button
        variant={'contained'}
        color={'error'}
        endIcon={<LogoutIcon />}
      >
        ERROR
      </Button>
      <br />
      <Button
        variant={'contained'}
        color={'success'}
        endIcon={<LogoutIcon />}
      >
        SUCCESS
      </Button>
      <br />
    </div>
  )
}

export default App
