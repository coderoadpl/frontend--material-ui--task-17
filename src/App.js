import React from 'react'

import SystemButton from './components/SystemButton'

export const App = () => {
  return (
    <div>

      <SystemButton
        className={'CUSTOM'}
        iconColor={'yellow'}
        rippleColor={'green'}
      />

    </div>
  )
}

export default App
