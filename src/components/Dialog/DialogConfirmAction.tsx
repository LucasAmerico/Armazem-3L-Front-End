import React from 'react';
import { Dialog } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button/Button';
import useStyles from './styles';

interface Props {
  title: string;
  content: string;
  leftBtnLabel: string;
  rigthBtnLabel: string;
  open: any;
  closeFunction: any;
  actionFunction: any;
}
const DialogConfirmAction = ({
  title,
  content,
  open,
  closeFunction,
  actionFunction,
  leftBtnLabel,
  rigthBtnLabel,
}: Props) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={() => closeFunction()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      data-testid="dialog-test"
    >
      <DialogTitle id="alert-dialog-title"> {title} </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeFunction()} className={classes.button}>
          {leftBtnLabel}
        </Button>
        <Button onClick={() => actionFunction()} color="primary" autoFocus>
          {rigthBtnLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogConfirmAction;
