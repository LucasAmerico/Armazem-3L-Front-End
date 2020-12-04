import { atom } from 'recoil';

const sideBarState = atom({
  key: 'sideBarState',
  default: false,
});

const saveCarga = atom({
  key: 'saveCarga',
  default: false,
});

export default { sideBarState, saveCarga };
