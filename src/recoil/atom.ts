import { atom } from 'recoil';
import { IDetalhes, IPropsDialog, ITabItems } from '../utils/interfaces';

const sideBarState = atom({
  key: 'sideBarState',
  default: false,
});

const changeCarga = atom({
  key: 'changeCarga',
  default: false,
});

const saveProduto = atom({
  key: 'saveProduto',
  default: false,
});

//  controla o dialog de remover produto
const openDialog = atom({
  key: 'openDialog',
  default: { open: false, id: 0 } as IPropsDialog,
});

//  controla o dialog de aceitar carga
const openDialogAccCarga = atom({
  key: 'openDialogAccCarga',
  default: { open: false, id: 0 } as IPropsDialog,
});

//  controla o dialog de recusar carga
const openDialogRecCarga = atom({
  key: 'openDialogRecCarga',
  default: { open: false, id: 0 } as IPropsDialog,
});

//  controla o modal detalhes
const openDetalhe = atom({
  key: 'openDetalhe',
  default: { open: false, id: 0 } as IDetalhes,
});

const tabAtivo = atom({
  key: 'tabAtivo',
  default: { value: 0 } as ITabItems,
});

const currentUser = atom({
  key: 'currentUser',
  default: 'Olá, visitante!',
});

const login = atom({
  key: 'login',
  default: false,
});

const bloco = atom({
  key: 'bloco',
  default: 0,
});

export default {
  sideBarState,
  changeCarga,
  saveProduto,
  openDialog,
  openDetalhe,
  tabAtivo,
  openDialogAccCarga,
  openDialogRecCarga,
  currentUser,
  login,
  bloco,
};
