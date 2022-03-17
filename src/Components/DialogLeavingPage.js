import {
  Dialog, DialogActions, DialogContent,
  DialogTitle, Button, Typography,
} from '@mui/material';
import React from 'react'

const DialogLeavingPage = ({
  showDialog,
  setShowDialog,
  cancelNavigation,
  confirmNavigation
}) => {
  const handleDialogClose = () => {
    setShowDialog(false);
  };
  return (
    <Dialog fullWidth open={showDialog} onClose={handleDialogClose} >
      <DialogTitle>Leaving Page</DialogTitle>
      <DialogContent>
        <Typography>
          There are some changes, if you procedd data will be lost.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={cancelNavigation} >
          No
        </Button>
        <Button variant='outlined' onClick={confirmNavigation} >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogLeavingPage