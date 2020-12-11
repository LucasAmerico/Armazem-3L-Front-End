import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import clsx from 'clsx';
import { Button, Grid, Typography } from '@material-ui/core';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';
import useWindowDimensions from '../../utils/windowsDimension';
import CardGrafico from '../../components/Cards/CardGrafico';
import CardComponent from '../../components/Cards/CardComponent';
import CargaService from '../../services/CargaService';
import CardUsers from '../../components/Cards/CardUsers';
import usuarioEnum from '../../utils/enum/usuarioEnum';
import CargasPage from '../Cargas';

const HomePage = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(GlobalStates.sideBarState);

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <div>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          className={classes.container}
        >
          <Grid justify="center">
            <h1>Escolha o tipo de acesso</h1>
          </Grid>
          <Grid
            container
            spacing={10}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <CardUsers
                titulo="Administrativo"
                tipoUsuario={usuarioEnum.ADMINISTRATIVO}
                route="/cargas"
              />
            </Grid>
            <Grid item>
              <CardUsers
                titulo="Motorista"
                tipoUsuario={usuarioEnum.MOTORISTA}
                route="/motoristas"
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;
