/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import clsx from 'clsx';
import useWindowDimensions from '../../utils/windowsDimension';
import useStyles from './styles';
import GlobalStates from '../../recoil/atom';
import CardDashboard from '../../components/cards-dashboard';
import CargaLista from '../../components/carga-list';

const CargasPage = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(GlobalStates.sideBarState);

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: open,
        [classes.contentDisplay]: true,
      })}
    >
      <div className={classes.contentLista}>
        <CargaLista />
      </div>
      <div className={classes.contentCards}>
        <CardDashboard />
      </div>
    </div>
  );
};

export default CargasPage;
