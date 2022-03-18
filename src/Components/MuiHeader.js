import {
  AppBar, CssBaseline, Toolbar, Typography,
  Box, Button,
} from '@mui/material'
import React, { Fragment } from 'react'
import { makeStyles } from '@mui/styles'
import { Link, NavLink } from 'react-router-dom'

const pages = ['All Quotes', 'New Quote']

const MuiHeader = () => {
  const classes = useStyles()
  // ..... navData.isActive => navData.isActive
  const navLinkFunc = ({ isActive }) => isActive ? classes.linkActive : classes.linkTextBtn
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position='static' className={classes.appBar}>
        <Toolbar className={classes.toolBar} >
          <Typography variant='h5' sx={{ flexGrow: 5 }} >
            Quotes
          </Typography>
          <Box className={classes.linksBox}>
            <NavLink
              // className={classes.linkTextBtn}
              to='/quotes'
              className={navLinkFunc}
            >
              All Quotes
            </NavLink>

            <NavLink
              className={navLinkFunc}
              to='/new-quote'
            >
              New Quote
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#055096 !important',
    height: '6.0rem',
  },
  toolBar: {
    display: 'flex',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 12rem 0 12rem',
  },
  linksBox: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  linkTextBtn: {
    fontSize: '1.2rem !important',
    textTransform: 'none !important',
    color: 'darkblue !important',
    textDecoration: 'none',
    "&:hover": {
      textDecoration: 'underline'
    },
  },
  linkActive: {
    color: 'white !important',
    fontSize: '1.2rem !important',
    textDecoration: 'none'
  }
})

export default MuiHeader