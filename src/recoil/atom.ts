import { atom } from 'recoil';
import { IDtProduct, IRmProduct } from '../utils/interfaces';

const sideBarState = atom({
  key: 'sideBarState',
  default: false,
});

const saveCarga = atom({
  key: 'saveCarga',
  default: false,
});

const saveProduto = atom({
  key: 'saveProduto',
  default: false,
});

const openDialog = atom({
  key: 'openDialog',
  default: { open: false, id: 0 } as IRmProduct,
});

const openProdutoDetalhe = atom({
  key: 'openDetalhe',
  default: { open: false, id: 0 } as IDtProduct,
});

const currentUser = atom({
  key: 'currentUser',
  default: '',
});

export default {
  sideBarState,
  saveCarga,
  saveProduto,
  openDialog,
  openProdutoDetalhe,
  currentUser,
};
