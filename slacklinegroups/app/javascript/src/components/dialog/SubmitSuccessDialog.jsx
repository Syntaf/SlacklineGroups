import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

const SubmitSuccessDialog = ({open}) => (
  <Dialog open={open} maxWidth="xs" fullWidth={true}>
    <DialogTitle className="dialogTitle">Group Submitted</DialogTitle>
    <DialogContent className="dialogContent">
      Thank you for your submission! We'll review your group and send you a 
      confirmation email shortly.
    </DialogContent>
    <DialogActions>
      <Button href="/" color="primary">
        Return to Map
      </Button>
    </DialogActions>
  </Dialog>
);

export default SubmitSuccessDialog;
