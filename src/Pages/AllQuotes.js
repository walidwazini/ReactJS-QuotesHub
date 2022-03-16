import React from 'react'
import { makeStyles } from '@mui/styles'
import {
  Card, List, Button,
  Typography, CardMedia, CardContent,
} from '@mui/material'
import { Link } from 'react-router-dom'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Walid', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Armin', text: 'Learning React is great!' },
  { id: 'q3', author: 'Touka', text: 'Learning React is challenging!' }
]

const AllQuotes = () => {
  const classes = useStyles()

  return (
    <div className={classes.pageLayout} >
      {
        DUMMY_QUOTES.map(quote => (
          <Card key={quote.id} className={classes.cardLayout} >
            <div className={classes.quoteWrapper} >
              <Typography variant='h5' className={classes.quoteText} >
                {quote.text}
              </Typography>
              <p className={classes.author} >
                {quote.author}
              </p>
            </div>
            <Button
              variant='contained'
              sx={{
                textTransform: 'none', height: 50,
                borderRadius: 5,
              }}
            >
              <Link className={classes.linkText} to={`/quotes/${quote.id}`} >
                View Fullscreen
              </Link>
            </Button>
          </Card >
        ))
      }
      <Card className={classes.cardLayout} >
        <div className={classes.quoteWrapper} >
          <Typography variant='h5' className={classes.quoteText} >
            Learning React is awesome!
          </Typography>
          <p className={classes.author} >
            Walid
          </p>
        </div>
        <Button
          variant='contained'
          sx={{
            textTransform: 'none', height: 50,
            borderRadius: 5,
          }}
        >
          <Link className={classes.linkText} to={`/quotes/${DUMMY_QUOTES[0].id}`} >
            View Fullscreen
          </Link>
        </Button>
      </Card >
    </div >
  )
}

const useStyles = makeStyles({
  pageLayout: {
    // backgroundColor: 'grey',
    // height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingTop: 0,
  },
  cardLayout: {
    borderRadius: 15,
    minWidth: 520,
    padding: 15,
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quoteWrapper: {
    marginRight: 30,
    // backgroundColor: 'wheat',
    // height: '4rem'
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

export default AllQuotes  