import React from 'react'
import { makeStyles } from '@mui/styles'

import QuoteList from '../Components/Quotes/QuoteList';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Walid', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Armin', text: 'Learning React is great!' },
  { id: 'q3', author: 'Touka', text: 'Learning React is challenging!' },
  { id: 'q4', author: 'Edward', text: 'Learning React is tough!' }
]

const AllQuotes = () => {
  const classes = useStyles()

  return (
    <div className={classes.pageLayout} >
      <QuoteList quotes={DUMMY_QUOTES} />
    </div >
  )
}

const useStyles = makeStyles({
  pageLayout: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingTop: 0,
  },

})

export default AllQuotes  