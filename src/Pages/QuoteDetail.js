import { Box, Card, Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useParams } from 'react-router-dom'

const QuoteDetail = () => {
  const DUMMY_QUOTES = [
    { id: 'q1', author: 'Walid', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Armin', text: 'Learning React is great!' },
    { id: 'q3', author: 'Touka', text: 'Learning React is challenging!' }
  ]
  const classes = useStyles()
  const params = useParams()
  const quote = DUMMY_QUOTES.find(q => q.id === params.quoteId)

  if (!quote) {
    return <p>No quote found</p>
  }

  return (
    <div className={classes.pageLayout} >
      <Box sx={{ height: '7rem' }} ></Box>
      <Card className={classes.cardLayout} >
        <Typography variant='h3' >
          Quote Detail
        </Typography>
        <p> {quote.text} </p>
        <p> {params.quoteId} </p>
      </Card>
    </div>
  )
}

const useStyles = makeStyles({
  pageLayout: {
    display: 'flex !important',
    flexDirection: 'column !important',
    alignItems: 'center !important',
    justifyContent: 'center'
  },
  cardLayout: {
    width: '35%',
    maxWidth: '40rem',
    padding: '3rem',
  }
})

export default QuoteDetail