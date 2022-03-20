import { Box, Card, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect } from 'react'
import { Route, useParams, Link, Routes } from 'react-router-dom'

import Comments from '../Components/Comments'
import useHttp from '../Hooks/use-http'
import { getSingleQuote } from '../lib/api'

const QuoteDetail = () => {
  const classes = useStyles()
  const params = useParams()
  const { quoteId } = params
  // const quote = DUMMY_QUOTES.find(q => q.id === params.quoteId)
  const {
    sendRequest, status, data: loadedQuote, error
  } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(params.quoteId)
  }, [sendRequest, params.quoteId])

  if (status === 'pending') {
    return <div className='centered' >
      <p>Pending....</p>
    </div>
  }

  if (error) {
    return <p className='centered' >
      {error}
    </p>
  }

  if (!loadedQuote.text) {
    return <p>No quote found.</p>
  }


  return (
    <div className={classes.pageLayout} >
      <Box sx={{ height: '7rem' }} ></Box>
      <Card className={classes.cardLayout} >
        <Typography variant='h3' >
          Quote Detail
        </Typography>
        <p> {loadedQuote.text} </p>
        <p> {loadedQuote.author} </p>
      </Card>
      <Routes>
        <Route
          path={''}
          element={
            <div className={classes.loadComment} >
              <Link to={`/quotes/${params.quoteId}/comments`} >
                Load Comment
              </Link>
            </div>
          }
        />
      </Routes>
      <Routes>
        <Route path={`comments`} element={<Comments />} />
      </Routes>
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
  },
  loadComment: {
    margin: '3rem auto',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
  }
})

export default QuoteDetail