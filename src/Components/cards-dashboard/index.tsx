import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';
import useWindowDimensions from '../../utils/windowsDimension';
import CargaService from '../../services/CargaService';
import CardGrafico from '../Cards/CardGrafico';
import CardComponent from '../Cards/CardComponent';

const CardDashboard = () => {
  const [pageState, setPageState] = useState({
    cargasList: [],
    pententePorcentagem: 50,
    aceitasPorcentagem: 50,
    key: 0,
  });
  const calculaCargasPendentes = () => {
    const filtrados = pageState.cargasList.filter(
      (item: any) => item.motoristaId === 0,
    );
    return filtrados.length;
  };
  const calculaCargasAceitas = () => {
    const filtrados = pageState.cargasList.filter(
      (item: any) => item.motoristaId > 0,
    );
    return filtrados.length;
  };

  useEffect(() => {
    CargaService.getCarga()
      .then((data) => {
        console.log(data);
        const filtradosAceitos = data.filter(
          (item: any) => item.motoristaId > 0,
        );
        const filtradosPendentes = data.filter(
          (item: any) => item.motoristaId === 0,
        );
        const aceitosPerct = Math.floor(
          (filtradosAceitos.length * 100) / data.length,
        );
        const pendentesPerct = Math.floor(
          (filtradosPendentes.length * 100) / data.length,
        );
        setPageState({
          ...pageState,
          cargasList: data,
          aceitasPorcentagem: aceitosPerct,
          pententePorcentagem: pendentesPerct,
          key: pageState.key + 1,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(GlobalStates.sideBarState);

  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Grid item xs={12} spacing={0}>
          <CardGrafico
            key={pageState.key}
            color="#DAD8D8"
            qtdAceitas={pageState.aceitasPorcentagem}
            qtdPendente={pageState.pententePorcentagem}
          />
        </Grid>
        <Grid item xs={12} spacing={0}>
          <CardComponent
            titulo="Cargas Pendentes"
            quantidade={calculaCargasPendentes()}
            color="#E0DC74"
          />
        </Grid>
        <Grid item xs={12} spacing={0}>
          <CardComponent
            titulo="Cargas Aceitas"
            quantidade={calculaCargasAceitas()}
            color="#96BB88"
          />
        </Grid>
        <Grid item xs={12} spacing={0}>
          <CardComponent
            titulo="Total de Cargas"
            quantidade={pageState.cargasList.length}
            color="#DAD8D8"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CardDashboard;
