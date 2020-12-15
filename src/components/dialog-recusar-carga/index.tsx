import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { IPropsRecCarga } from '../../utils/interfaces';
import useStyles from './styles';

const DialogRecCarga = ({ open, onClose, onDelete }: IPropsRecCarga) => {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Tem certeza que deseja recusar a carga?
        </DialogTitle>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={onDelete} color="default" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogRecCarga;
