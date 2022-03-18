import React, { Fragment } from 'react'
import { makeStyles } from '@mui/styles'
import {
  Card, Typography, Button,
} from '@mui/material'
import { Link } from 'react-router-dom'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Walid', text: 'From quote item!' },
  { id: 'q2', author: 'Armin', text: 'Learning React is great!' },
  { id: 'q3', author: 'Touka', text: 'Learning React is challenging!' },
  { id: 'q4', author: 'Edward', text: 'Learning React is tough!' }
]

const QuoteItem = ({
  id, author, text
}) => {
  const classes = useStyles()

  return (
    <Fragment>
      <Card className={classes.cardLayout} >
        <div className={classes.quoteWrapper} >
          <Typography variant='h5' className={classes.quoteText} >
            {text}
          </Typography>
          <p className={classes.author} >
            {author}
          </p>
        </div>
        <Button
          variant='contained'
          sx={{
            textTransform: 'none', height: 50,
            borderRadius: 5,
          }}
        >
          <Link className={classes.linkText} to={`/quotes/${id}`} >
            View Fullscreen
          </Link>
        </Button>
      </Card >
    </Fragment>
  )
}

const useStyles = makeStyles({
  cardLayout: {
    borderRadius: 15,
    minWidth: 520,
    padding: 15,
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#86b8e6 !important'
  },
  quoteWrapper: {
    marginRight: 30,

  },
  author: {
    fontSize: 15,
    color: 'grey',
    fontStyle: 'italic',
    marginTop: 3,
  },
  linkText: {
    textDecoration: 'none',
    color: 'white',
  },
})

export default QuoteItem