import React from 'react'
import PropTypes from 'prop-types'

import { Box, Button } from '@mui/material'

import { Delete as DeleteIcon } from '@mui/icons-material'

export const SystemButton = (props) => {
  const {
    className,
    iconColor,
    rippleColor,
    ...otherProps
  } = props

  return (
    <Box
      className={className}
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      {...otherProps}
    >
      <Button
        sx={{
          width: 400,
          '& .MuiTouchRipple-rippleVisible': {
            backgroundColor: 'red'
          }
        }}
        startIcon={
          <DeleteIcon
            sx={{ color: 'red' }}
          />
        }
      >
        CLICK ME
      </Button>
    </Box>
  )
}

SystemButton.propTypes = {
  className: PropTypes.string,
  iconColor: PropTypes.string,
  rippleColor: PropTypes.string
}

export default SystemButton
