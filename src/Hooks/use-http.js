import { useReducer, useCallback } from "react";

const httpReducer = (state, action) => {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'pending',
    }
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: 'completed'
    }
  }

  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      status: 'completed'
    }
  }

  return state
}

const useHttp = (requestFunction, startWithPending = false) => {
  const [httpState, httpDispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null
  })

  const sendRequest = useCallback(async (requestData) => {
    httpDispatch({ type: 'SEND' })
    try {
      const responseData = await requestFunction(requestData)
      httpDispatch({ type: 'SUCCESS', responseData })
    } catch (err) {
      httpDispatch({
        type: 'ERROR',
        errorMessage: err.message || 'Something wnet wrong..'
      })
    }
  },
    [requestFunction]
  )

  return { sendRequest, ...httpState }
}

export default useHttp