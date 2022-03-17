import { makeStyles } from "@mui/styles";
import { Fragment, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MuiHeader from "./Components/MuiHeader";
import AllQuotes from "./Pages/AllQuotes";
import NewQuote from "./Pages/NewQuote";
import QuoteDetail from "./Pages/QuoteDetail";

const App = () => {
  const classes = useStyles()

  return (
    <Fragment>
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
