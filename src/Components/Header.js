import React from 'react'
import { makeStyles } from '@mui/styles'
import {
  Typography,
} from '@mui/material'

const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <Typography>
        Quotes-Hub
      </Typography>
    </header>
  )
}

const useStyles = makeStyles({
  header: {
    width: '100%',
    height: '5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#008080'
  }
})
export default Header