import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import clsx from 'clsx';
import { Button, Grid } from '@material-ui/core';
import { Router, Route, Switch, Link, useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(GlobalStates.sideBarState);

  const handleOnClicUser = () => {
    history.push('/Cargas');
  };

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <h2>Usuários</h2>
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid>
            <Button onClick={handleOnClicUser}>
              <CardUsers
                titulo="Usuário Administrativo"
                tipoUsuario={usuarioEnum.ADMINISTRATIVO}
                alt="Usuário Adm"
              />
            </Button>
          </Grid>
          <Grid>
            <Button onClick={handleOnClicUser}>
              <CardUsers
                titulo="Motorista"
                tipoUsuario={usuarioEnum.MOTORISTA}
                alt="Motorista"
              />
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;
