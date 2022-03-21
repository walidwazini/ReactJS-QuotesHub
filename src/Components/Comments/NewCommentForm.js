import { Button, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Fragment, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import useHttp from '../../Hooks/use-http'
import { addComment } from '../../lib/api'

const NewCommentForm = (props) => {
  const classes = useStyles()
  const commentTextRef = useRef()
  const { quoteId, onAddedComment } = props
  const params = useParams()
  const { sendRequest, status, error } = useHttp(addComment)

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment()
    }
  }, [status, error, onAddedComment])

  const submitFormHandler = ev => {
    ev.preventDefault()
    const enteredText = commentTextRef.current.value
    sendRequest({
      commentData: { text: enteredText },
      quoteId: quoteId,
    })
    console.log('submit')
  }

  return (
    <Fragment>
      <form  // !must always use form not FormControl
        className={classes.form}
        onSubmit={submitFormHandler}
      >
        <TextField
          inputRef={commentTextRef}  // !must always use inputRef
          rows='3'
          multiline={true}
          type='text'
          className={classes.textField}
        />
        <Button
          type='submit'
          variant='contained'
          sx={{
            color: 'white', backgroundColor: 'blue'
          }}
        >
          Add Comment
        </Button>
      </form>
    </Fragment>
  )
}

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textField: {
    backgroundColor: 'white',
    margin: '0.3rem 0 1.4rem 0 !important',
    width: '130%'
  }
})

export default NewCommentForm