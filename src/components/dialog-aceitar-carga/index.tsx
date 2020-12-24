import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import React from 'react';
import { IPropsAccCarga } from '../../utils/interfaces';

const DialogAccCarga = ({ open, onClose, onDelete }: IPropsAccCarga) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" data-testid="title">
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
