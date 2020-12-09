import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';
import useWindowDimensions from '../../utils/windowsDimension';
import CardGrafico from '../../components/Cards/CardGrafico';
import CardComponent from '../../components/Cards/CardComponent';
import CargaService from '../../services/CargaService';
import CardUsers from '../../components/Cards/CardUsers';
import usuarioEnum from '../../utils/enum/usuarioEnum';

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
      <h2>Usuários</h2>

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid>
          <CardUsers
            titulo="Usuário Administrativo"
            tipoUsuario={usuarioEnum.ADMINISTRATIVO}
            rota={null}
            alt="Usuário Adm"
          />
        </Grid>
        <Grid>
          <CardUsers
            titulo="Motorista"
            tipoUsuario={usuarioEnum.MOTORISTA}
            rota={null}
            alt="Motorista"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
