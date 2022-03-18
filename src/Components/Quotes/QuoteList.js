import React, { Fragment } from 'react'
import { Button, Divider, } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useLocation, useNavigate } from 'react-router-dom'
import QuoteItem from './QuoteItem'

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  })
}

const QuoteList = ({ quotes }) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)

  const isSortingAscending = queryParams.get('sort') === 'asc'

  const sortedQuotes = sortQuotes(quotes, isSortingAscending)

  const sortingChangeHandler = () => {
    navigate({
      pathname: location.pathname,
      search: `sort=${isSortingAscending ? 'desc' : 'asc'}`
    })
  }

  return (
    <Fragment>
      <Button
        sx={{ textTransform: 'none' }}
        className={classes.button}
        variant='outlined'
        onClick={sortingChangeHandler}
      >
        Sort {isSortingAscending ? 'Descending ⬇️' : 'Ascending ⬆️'}
      </Button>
      {/* <Divider /> */}
      {
        sortedQuotes.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />

        ))
      }
    </Fragment>
  )
}

const useStyles = makeStyles({
  button: {
    backgroundColor: 'white !important',
    margin: '15px 0px 15px 0px !important',
  }
})

export default QuoteList