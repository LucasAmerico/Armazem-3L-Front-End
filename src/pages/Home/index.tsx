import React from 'react';
import { useRecoilValue } from 'recoil';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';
import CardUsers from '../../components/cards/CardUsers';
import usuarioEnum from '../../utils/enum/usuarioEnum';
import RecuperarSenha from '../../components/recuperar-senha';

const HomePage = () => {
  const classes = useStyles();
  const open = useRecoilValue(GlobalStates.sideBarState);

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
            <Typography variant="h4">Escolha o tipo de acesso</Typography>
          </Grid>
          <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              direction="row"
              justify="space-evenly"
              alignItems="center"
              className={classes.display}
            >
              <div className={classes.cardOne}>
                <CardUsers
                  titulo="Administrativo"
                  tipoUsuario={usuarioEnum.ADMINISTRATIVO}
                  route="/cargas"
                />
              </div>
              <div className={classes.cardTwo}>
                <CardUsers
                  titulo="Motorista"
                  tipoUsuario={usuarioEnum.MOTORISTA}
                  route="/motoristas"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <RecuperarSenha />
    </div>
  );
};

export default HomePage;
