import React from 'react'

import SystemButton from './components/SystemButton'

export const App = () => {
  return (
    <div>

      <SystemButton
        sx={{
          backgroundColor: (theme) => theme.palette.error.main
        }}
        iconColor={'yellow'}
        rippleColor={'green'}
      />

    </div>
  )
}

export default App
