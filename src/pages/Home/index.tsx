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
        <Grid container justify="center" spacing={0}>
          <h1>Escolha o tipo de acesso</h1>

          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={3} spacing={0}>
              <CardUsers
                titulo="Usuário Administrativo"
                tipoUsuario={usuarioEnum.ADMINISTRATIVO}
                route="/cargas"
              />
            </Grid>
            <Grid item xs={2} spacing={0}>
              <CardUsers
                titulo="Motorista"
                tipoUsuario={usuarioEnum.MOTORISTA}
                route="/produtos"
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;
