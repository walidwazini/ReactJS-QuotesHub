import { useEffect } from 'react'
import { makeStyles } from '@mui/styles'

import QuoteList from '../Components/Quotes/QuoteList';
import useHttp from '../Hooks/use-http';
import { getAllQuotes } from '../lib/api';
import { useMatch } from 'react-router-dom';
import Loading from '../Components/Loading';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const AllQuotes = () => {
  const classes = useStyles()
  const http = useHttp(getAllQuotes, true)
  // console.log(http.data)

  useEffect(() => {
    http.sendRequest()
  }, [http.sendRequest])

  if (http.status === 'pending') {
    return (
      <div className='centered' >
        <Loading />
      </div>
    )
  }

  if (http.error) {
    return <p>
      {http.error}
    </p>
  }

  if (http.status === 'completed' && (!http.data || http.data.length === 0)) {
    return <p>
      No quotes found
    </p>
  }

  return (
    <div className={classes.pageLayout} >
      <QuoteList quotes={http.data} />
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