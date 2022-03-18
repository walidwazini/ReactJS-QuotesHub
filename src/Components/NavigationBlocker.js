import React, { useContext, useEffect } from 'react'
import { UNSAFE_NavigationContext } from 'react-router-dom'

const NavigationBlocker = (navigationBlockingHandler, canShowDialogPrompt) => {
  const navigator = useContext(UNSAFE_NavigationContext).navigator

  useEffect(() => {
    if (!canShowDialogPrompt) return

    const unblock = navigator.block(tx => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        }
      }
      navigationBlockingHandler(autoUnblockingTx);
    })
    return unblock
  })
}

export default NavigationBlocker