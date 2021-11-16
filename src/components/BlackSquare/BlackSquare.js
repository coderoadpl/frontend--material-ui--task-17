import { Box } from '@mui/material'
import { styled } from '@mui/system'

export const BlackSquare = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  margin: theme.spacing(2),
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

export default BlackSquare
