import React from 'react'

import { Button } from '@mui/material'

export const App = () => {
  return (
    <div>
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
      >
        CONTAINED PRIMARY
      </Button>
      <br />
      <Button
        variant={'contained'}
        color={'secondary'}
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
