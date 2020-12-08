import { atom } from 'recoil';

const sideBarState = atom({
  key: 'sideBarState',
  default: false,
});

const changeCarga = atom({
  key: 'changeCarga',
  default: false,
});

export default { sideBarState, changeCarga };
