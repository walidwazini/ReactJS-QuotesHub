import { makeStyles } from "@mui/styles";
import React, { Fragment, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "./Components/Loading";
import MuiHeader from "./Components/MuiHeader";

// import AllQuotes from "./Pages/AllQuotes";
// import NewQuote from "./Pages/NewQuote";
// import QuoteDetail from "./Pages/QuoteDetail";

const AllQuotes = React.lazy(() => import('./Pages/AllQuotes'))
const NewQuote = React.lazy(() => import('./Pages/NewQuote'))
const QuoteDetail = React.lazy(() => import('./Pages/QuoteDetail'))

const App = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Suspense fallback={
        <div className="centered" >
          <Loading />
        </div>
      } >
        <MuiHeader />
        <main className={classes.mainLayout} >
          <Routes>
            <Route path="/" element={<Navigate to='/quotes' />} />
            <Route path="/quotes" element={<AllQuotes />} />
            <Route path="/new-quote" element={<NewQuote />} />
            <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </main>
      </Suspense>
    </Fragment>
  );
}

const useStyles = makeStyles({
  layout: {
    backgroundColor: '#66919E',
    // backgroundColor: 'orange',
    // height: '100vh',
  },
  mainLayout: {
    // backgroundColor: 'orange',
    // height: '100%',
    // marginTop: -10,
    // display: ' flex',

  }
})

export default App;
