import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { makeStyles } from '@mui/styles'

import { Delete as DeleteIcon } from '@mui/icons-material'

import { Button } from '@mui/material'

const useStyles = makeStyles((theme) => ({
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
      color: ({ iconColor }) => iconColor || theme.palette.error.main
    },
    '& .MuiTouchRipple-rippleVisible': {
      backgroundColor: ({ rippleColor }) => rippleColor || theme.palette.error.main
    }
  }
}), { name: 'CustomButton' })

export const CustomButton = (props) => {
  const {
    className,
    iconColor,
    rippleColor,
    ...otherProps
  } = props

  const classes = useStyles({ rippleColor, iconColor })

  return (
    <div
      className={clsx([
        classes.root,
        className
      ])}
      {...otherProps}
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

CustomButton.propTypes = {
  className: PropTypes.string,
  iconColor: PropTypes.string,
  rippleColor: PropTypes.string
}

export default CustomButton
