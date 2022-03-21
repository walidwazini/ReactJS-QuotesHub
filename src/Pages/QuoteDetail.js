import { Box, Card, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect } from 'react'
import { Route, useParams, Link, Routes } from 'react-router-dom'

import Comments from '../Components/Comments/Comments'
import Loading from '../Components/Loading'
import HilightedQuote from '../Components/Quotes/HilightedQuote'
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
    return (
      <div className='centered' >
        <Loading />
      </div>
    )
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
      <Box sx={{ height: '3rem' }} ></Box>
      <HilightedQuote author={loadedQuote.author} text={loadedQuote.text} />
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