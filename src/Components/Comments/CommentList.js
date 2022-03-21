import React from 'react'
import { makeStyles } from '@mui/styles'

const CommentList = ({ allComments }) => {
  const classes = useStyles()

  return (
    <div>
      <ul className={classes.commentsList}>
        {allComments.map(comment => (
          <li key={comment.id} className={classes.commentItem}>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const useStyles = makeStyles({
  commentsList: {
    listStyle: 'none',
    margin: '2.5rem 0',
    padding: 0,
  },
  commentItem: {
    margin: '1rem 0',
    fontSize: '1.24rem',
    paddingBottom: '0.5rem',
    color: 'white',
    borderBottom: '2px solid grey'
  }
})
export default CommentList