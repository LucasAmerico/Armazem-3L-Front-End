import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import React from 'react';
import { IPropsRmProduto } from '../../utils/interfaces';

const DialogRmProduto = ({
  open,
  onClose,
  onDelete,
  nome,
}: IPropsRmProduto) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Tem certeza que desja deletar o produto {nome}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Para a exclusão deste produto {nome}, é necessario que ele não
            esteja vinculado a nenhuma carga.
          </DialogContentText>
        </DialogContent>
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

export default DialogRmProduto;
