import React, { useState, useReducer } from 'react'
import { Button, Card, FormControl, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') }

  }
  return { value: '', isValid: false }
}
const passwordReducer = (state, action) => {
  if (action.type === 'USER_PASSWORD') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
}


const LoginPage = () => {
  const classes = useStyles()
  const [formIsValid, setFormIsValid] = useState(false)
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', isValid: undefined,
  })
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '', isValid: undefined,
  })

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_INPUT', val: event.target.value
    })

  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: 'USER_PASSWORD', val: event.target.value
    })

  };

  const validateEmailHandler = () => {

    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' })
  };

  const submitHandler = (event) => {
    console.log('Working')
    event.preventDefault();
    // if (formIsValid) {
    //   authCtx.onLogin(emailState.value, passwordState.value);
    // } else if (!emailIsValid) {
    //   emailInputRef.current.focus()
    // } else {
    //   passwordInputRef.current.focus()
    // }
  };

  return (
    <div className={classes.pageLayout}>
      <Card className={classes.loginCardLayout} >
        <Typography>
          Login Page
        </Typography>
        <FormControl >
          <TextField
            label='Email'
            type='email'
            id='email'
            className={classes.emailField}
          />
          <TextField
            label='Password'
            type='password'
            id='password'
            className={classes.emailField}
          />
          <Button
            type='submit'
            variant='contained' onClick={submitHandler}
          >
            Login
          </Button>
        </FormControl>
      </Card>
    </div>
  )
}

const useStyles = makeStyles({
  pageLayout: {
    height: '60vh',
    backgroundColor: 'orange',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginCardLayout: {
    width: '50rem',
    height: '20rem',
    borderRadius: '20px !important',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  }
})

export default LoginPage