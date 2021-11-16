import React from 'react'

import { Box } from '@mui/material'

export const App = () => {
  return (
    <div>

      <Box
        sx={{
          width: 100,
          height: 100,
          m: 2,
          bgcolor: 'common.black',
          color: 'common.white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        SQUARE
      </Box>

    </div>
  )
}

export default App
