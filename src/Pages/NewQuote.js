import { makeStyles } from '@mui/styles'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import QuoteForm from '../Components/Quotes/QuoteForm'
import useHttp from '../Hooks/use-http'
import { addQuote } from '../lib/api'

const NewQuote = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { sendRequest, status } = useHttp(addQuote)

  useEffect(() => {
    if (status === 'completed') {
      navigate('/quotes')
    }
  }, [status])

  const addQuoteHandler = quoteData => {
    sendRequest(quoteData)
  }

  return (
    <div className={classes.pageLayout} >
      <QuoteForm
        onAddQuote={addQuoteHandler}
      />
    </div>
  )
}

const useStyles = makeStyles({
  pageLayout: {
    // backgroundColor: 'red',
    // height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8rem',
  },
  cardLayout: {
    width: 650,
    height: 320,
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jsxTextField: {
    fontSize: 25,
    margin: '1rem 0 2rem 0',
  },
  jsxAuthorField: {
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
  },
  muiTextField: {
    margin: '1rem 0 2rem 0 !important',
    width: '20rem'
  },
})

const useJsx = (
  <form >
    <label>Author</label>
    <input
      aria-label='author'
    // className={classes.jsxAuthorField}
    />
    <textarea
      type='text'
    // className={classes.jsxTextField}
    />
    <button
      variant='contained'
    >
      Add Quote
    </button>
  </form>
)

export default NewQuote