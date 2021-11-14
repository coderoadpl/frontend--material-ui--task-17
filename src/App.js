import React from 'react'

import { Button } from '@mui/material'

import { Logout as LogoutIcon } from '@mui/icons-material'

export const App = () => {
  return (
    <div>
      <LogoutIcon /> some text
      <br />
      <Button>
        DEFAULT
      </Button>
      <br />
      <Button
        variant={'text'}
      >
        TEXT
      </Button>
      <br />
      <Button
        variant={'contained'}
        color={'primary'}
        startIcon={<LogoutIcon />}
      >
        CONTAINED PRIMARY
      </Button>
      <br />
      <Button
        variant={'contained'}
        color={'secondary'}
        endIcon={<LogoutIcon />}
      >
        CONTAINED SECONDARY
      </Button>
      <br />
      <Button
        variant={'outlined'}
      >
        OUTLINED
      </Button>
    </div>
  )
}

export default App
