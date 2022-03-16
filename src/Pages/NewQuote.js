import {
  Button, Card,
  FormControl, TextField,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewQuote = () => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [isEntering, setIsEntering] = useState(false)
  const navigate = useNavigate()

  const nameChangeHandler = ev => {
    setName(ev.target.value)
  }

  const textChangeHandler = ev => {
    setText(ev.target.value)
  }

  const submitHandler = ev => {
    ev.preventDefault()
    console.log({ author: name, text: text })
    setName('')
    setText('')
    navigate('/quotes')
  }

  const formFocusHandler = () => {
    console.log('Focus')
  }

  const useJsx = (
    <form onFocus={formFocusHandler} >
      <label>Author</label>
      <input
        aria-label='author'
        className={classes.jsxAuthorField}
      />
      <textarea
        type='text'
        className={classes.jsxTextField}
      />
      <Button
        variant='contained'
      >
        Add Quote
      </Button>
    </form>
  )

  const quoteForm = (
    <FormControl onFocus={formFocusHandler} >
      <TextField
        // onFocus={formFocusHandler}
        label='Author'
        value={name}
        onChange={nameChangeHandler}
      />
      <TextField
        label='Quote'
        multiline={true}
        rows='3'
        value={text}
        onChange={textChangeHandler}
        className={classes.muiTextField}
      />
      <Button
        variant='contained'
        onClick={submitHandler}
      >
        Add Quote
      </Button>
    </FormControl>
  )

  return (
    <div className={classes.pageLayout} >
      <Card className={classes.cardLayout} >
        {quoteForm}
      </Card>
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
  muiAuthorField: {}
})

export default NewQuote