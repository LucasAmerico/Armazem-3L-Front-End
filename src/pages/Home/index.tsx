import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import sideBarState from '../../recoil/atom';
import useStyles from './styles';
import useWindowDimensions from '../../utils/windowsDimension';
import CardGrafico from '../../Components/Cards/CardGrafico';
import CardComponent from '../../Components/Cards/CardComponent';
import CargaService from '../../services/CargaService';

const HomePage = () => {
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
  const [open, setOpen] = useRecoilState(sideBarState);

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <Grid container spacing={4}>
        <Grid container item xs={12} spacing={0}>
          <CardGrafico
            key={pageState.key}
            color="#DAD8D8"
            qtdAceitas={pageState.aceitasPorcentagem}
            qtdPendente={pageState.pententePorcentagem}
          />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <CardComponent
            titulo="Cargas Pendentes"
            quantidade={calculaCargasPendentes()}
            color="#E0DC74"
          />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <CardComponent
            titulo="Cargas Aceitas"
            quantidade={calculaCargasAceitas()}
            color="#96BB88"
          />
        </Grid>
        <Grid container item xs={12} spacing={0}>
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

export default HomePage;
