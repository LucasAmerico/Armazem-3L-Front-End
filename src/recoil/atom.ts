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

const updateData = atom({
  key: 'updateData',
  default: { update: false },
});

const currentUser = atom({
  key: 'currentUser',
  default: '',
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
};
