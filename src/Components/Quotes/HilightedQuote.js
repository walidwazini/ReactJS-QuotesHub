import React from 'react'
import { Card, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const HilightedQuote = ({ text, author }) => {
  const classes = useStyles()
  return (
    <Card className={classes.cardLayout} >
      <Typography className={classes.text} >
        {text}
      </Typography>
      <div className={classes.authorWrapper} >
        <p className={classes.author}>
          {author}
        </p>
      </div>
    </Card>
  )
}

const useStyles = makeStyles({

  cardLayout: {
    backgroundColor: '#132692!important',
    color: 'white !important',
    padding: '3rem',
    margin: '3rem auto',
    width: '90%',
    maxWidth: '30rem',
  },
  authorWrapper: {
    // backgroundColor: 'red',
    margin: 0,
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
    alignItems: 'end',
    height: '4rem',
    width: '95%'
  },
  text: {
    fontSize: '2.5rem !important'
  },
  author: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '1.4rem !important',
    color: '#5da8d4 !important'
  },
})

export default HilightedQuote