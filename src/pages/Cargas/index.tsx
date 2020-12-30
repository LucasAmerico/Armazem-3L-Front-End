/* eslint-disable linebreak-style */
import React from 'react';
import { useRecoilValue } from 'recoil';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import GlobalStates from '../../recoil/atom';
import CardDashboard from '../../components/cards-dashboard';
import CargaLista from './components/carga-list';

const CargasPage = () => {
  const classes = useStyles();

  const open = useRecoilValue(GlobalStates.sideBarState);

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: open,
        [classes.contentDisplay]: true,
      })}
      data-testid="componente"
    >
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <CargaLista />
        </Grid>
      </Grid>
      <div className={classes.contentCards}>
        <CardDashboard />
      </div>
    </div>
  );
};

export default CargasPage;
