/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import clsx from 'clsx';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import InputBase from '@material-ui/core/InputBase/InputBase';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import CargaService from '../../services/CargaService';
import Lista from '../../components/List/list';
import useWindowDimensions from '../../utils/windowsDimension';
import useStyles from './styles';
import GlobalStates from '../../recoil/atom';
import CadastroCarga from '../../components/modal-cadastro-carga/CadastroCarga';
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
