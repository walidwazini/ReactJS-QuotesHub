import { Fragment, useRef } from 'react'
import { useState } from 'react'
import { makeStyles } from '@mui/styles'
import {
  Card, FormControl, TextField, Button,
} from '@mui/material'

// TODO import useNavigatingAway from '../../Hooks/useNavigatingAway'
// TODO import DialogLeavingPage from '../DialogLeavingPage'

const QuoteForm = (props) => {
  const classes = useStyles()
  const [isEntering, setIsEntering] = useState(false)
  // const [name, setName] = useState('')
  // const [text, setText] = useState('')
  const textInputRef = useRef()
  const authorInputRef = useRef()

  // TODO const [canShowDialogLeavingPage, setCanShowDialogLeavingPage] = useState(false)
  // TODO const [showDialogLeavingPage, confirmNavigation, cancelNavigation] = useNavigatingAway(canShowDialogLeavingPage)


  // TODO const nameChangeHandler = ev => {
  //   setName(ev.target.value)
  //   if (ev.target.value !== '') setCanShowDialogLeavingPage(true)
  //    else setCanShowDialogLeavingPage(false)
  // }

  // const textChangeHandler = ev => {
  //   setText(ev.target.value)
  //   if (ev.target.value !== '') setCanShowDialogLeavingPage(true)
  //   else setCanShowDialogLeavingPage(false)
  // }



  const submitHandler = ev => {
    ev.preventDefault()
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    console.log({ author: enteredAuthor, text: enteredText })
    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusHandler = () => {
    setIsEntering(true)
  }

  return (
    <Fragment>
      {/*  <DialogLeavingPage
        showDialog={showDialogLeavingPage}
        setShowDialog={setCanShowDialogLeavingPage}
        confirmNavigation={confirmNavigation}
        cancelNavigation={cancelNavigation}
      /> */}
      <Card className={classes.cardLayout} >
        <FormControl onFocus={formFocusHandler} >
          <TextField
            onFocus={formFocusHandler}
            inputRef={authorInputRef}
            label='Author'
            type='text'
          // value={name}
          // onChange={nameChangeHandler}
          />
          <TextField
            onFocus={formFocusHandler}
            inputRef={textInputRef}
            label='Quote Text'
            multiline={true}
            rows='3'
            type='text'
            // value={text}
            // onChange={textChangeHandler}
            className={classes.muiTextField}
          />
          <Button
            variant='contained'
            onClick={submitHandler}
          >
            Add Quote
          </Button>
        </FormControl>
      </Card>
    </Fragment>

  )
}

const useStyles = makeStyles({
  cardLayout: {
    width: 650,
    height: 320,
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  muiTextField: {
    margin: '1rem 0 2rem 0 !important',
    width: '20rem'
  },
})

export default QuoteForm

