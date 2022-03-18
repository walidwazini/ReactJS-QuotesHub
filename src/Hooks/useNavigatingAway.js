import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import NavigationBlocker from '../Components/NavigationBlocker'

const useNavigatingAway = (canShowDialogPrompt) => {
  const navigate = useNavigate()
  const currentLocation = useLocation()
  const [showDialogPrompt, setShowDialogPrompt] = useState(false);
  const [wantToNavigateTo, setWantToNavigateTo] = useState(null);
  const [isNavigationConfirmed, setIsNavigationConfirmed] = useState(false)

  const navigationBlockingHandler = useCallback(
    (locationToNavigateTo) => {
      if (
        !isNavigationConfirmed &&
        locationToNavigateTo.location.pathName !== currentLocation.pathname
      ) {
        setShowDialogPrompt(true)
        setWantToNavigateTo(locationToNavigateTo)
        return false
      }
      return true
    },
    [isNavigationConfirmed]
  )

  const cancelNavigation = useCallback(() => {
    setIsNavigationConfirmed(false);
    setShowDialogPrompt(false);
  }, []);

  const confirmNavigation = useCallback(() => {
    setIsNavigationConfirmed(true)
    setShowDialogPrompt(false)
  }, [])

  useEffect(() => {
    if (isNavigationConfirmed && wantToNavigateTo) {
      navigate(wantToNavigateTo.location.pathname)
    }
  }, [isNavigationConfirmed, wantToNavigateTo])

  NavigationBlocker(navigationBlockingHandler, canShowDialogPrompt)

  return [showDialogPrompt, confirmNavigation, cancelNavigation]
}

export default useNavigatingAway 