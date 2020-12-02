/* eslint-disable linebreak-style */
import React from 'react';
import { useRecoilState } from 'recoil';
import clsx from 'clsx';
import sideBarState from '../../recoil/atom';
import useStyles from './styles';
import useWindowDimensions from '../../utils/windowsDimension';
import Lista from '../../components/Lista/lista';

const HomePage = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(sideBarState);

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <Lista />
    </div>
  );
};

export default HomePage;
