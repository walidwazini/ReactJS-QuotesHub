import React, { Fragment } from 'react'
import DotLoader from 'react-spinners/DotLoader'

const Loading = () => {
  return (
    <Fragment>
      <DotLoader color='white' size={120} />
    </Fragment>
  )
}

export default Loading