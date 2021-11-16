import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export const BlackSquare = (props) => {
  const {
    sx,
    children,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        width: 100,
        height: 100,
        m: 2,
        bgcolor: 'common.black',
        color: 'common.white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx
      }}
      {...otherProps}
    >
      {children}
    </Box>
  )
}

BlackSquare.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node
}

export default BlackSquare
