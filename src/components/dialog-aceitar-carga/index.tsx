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
import { IPropsAccCarga } from '../../utils/interfaces';
import useStyles from './styles';

const DialogAccCarga = ({ open, onClose, onDelete }: IPropsAccCarga) => {
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
          Tem certeza que deseja aceitar a carga escolhida?
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

export default DialogAccCarga;
