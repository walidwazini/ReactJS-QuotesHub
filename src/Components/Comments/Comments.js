import { useState, useCallback, useEffect } from 'react'
import { makeStyles } from '@mui/styles'

import useHttp from '../../Hooks/use-http'
import { getAllComments } from '../../lib/api'
import Loading from '../Loading'
import { useParams } from 'react-router-dom'
import CommentList from './CommentList'
import { Button } from '@mui/material'
import NewCommentForm from './NewCommentForm'

const Comments = () => {
  const classes = useStyles()
  const [isAddingComment, setIsAddingComment] = useState(false)
  const params = useParams()
  const { quoteId } = params
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  const startAddCommentHandler = () => setIsAddingComment(true)

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  let comments
  if (status === 'pending') {
    comments = (
      <div className='centered' >
        <Loading />
      </div>
    )
  }

  if (status === 'completed' && loadedComments.length > 0) {
    comments = <CommentList allComments={loadedComments} />
  }

  if (status === 'completed' && loadedComments.length === 0) {
    comments = (
      <p className='centered'>No comment were added</p>
    )
  }

  return (
    <section className={classes.comments} >
      <h2>User Comment</h2>
      {!isAddingComment && (
        <Button variant='contained'
          onClick={startAddCommentHandler}
          sx={{ textTransform: 'none' }}
        >
          Add a Comment
        </Button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  )
}

const useStyles = makeStyles({
  comments: {
    textAlign: 'center'
  }
})

export default Comments