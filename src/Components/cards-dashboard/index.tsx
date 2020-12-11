import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import GlobalStates from '../../recoil/atom';
import useWindowDimensions from '../../utils/windowsDimension';
import CargaService from '../../services/CargaService';
import CardGrafico from '../Cards/CardGrafico';
import useStyles from './styles';
import CardComponent from '../Cards/CardComponent';
import { IPropsCards } from '../../utils/interfaces';

const CardDashboard = ({ parent }: IPropsCards) => {
  const [pageState, setPageState] = useState({
    cargasList: [],
    pendentePorcentagem: 0,
    aceitasPorcentagem: 0,
    rejeitadasPorcentagem: 0,
    key: 0,
  });

  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [changeCarga, setchangeCarga] = useRecoilState(
    GlobalStates.changeCarga,
  );
  const [recusadas, setRecusadas] = useState<number[]>([]);

  const calculaCargasPendentes = () => {
    const filtrados = pageState.cargasList.filter(
      (item: any) => item.motoristaId === 0 && !recusadas.includes(item.id!),
    );
    return filtrados.length;
  };

  const calculaCargasAceitas = () => {
    const filtrados = pageState.cargasList.filter(
      (item: any) => item.motoristaId > 0,
    );
    return filtrados.length;
  };

  const calculaCargasRecusadas = () => {
    const filtrados = pageState.cargasList.filter((item: any) =>
      recusadas.includes(item.id!),
    );
    return filtrados.length;
  };
  const buscaCargas = () => {
    CargaService.getCarga()
      .then((data) => {
        CargaService.getCargasRecusadas(1)
          .then((data2: any) => {
            console.log(data2);
            console.log(data);

            setRecusadas(data2.map((item: any) => item.cargaId));

            const filtradosAceitos = data.filter(
              (item: any) => item.motoristaId > 0,
            );
            const filtradosPendentes = data.filter(
              (item: any) =>
                item.motoristaId === 0 && !recusadas.includes(item.id!),
            );

            const aceitosPerct = Math.floor(
              (filtradosAceitos.length * 100) / data.length,
            );
            const pendentesPerct = Math.floor(
              (filtradosPendentes.length * 100) / data.length,
            );
            const rejeitadosPerct = Math.floor(
              (data2.length * 100) / data.length,
            );
            setPageState({
              ...pageState,
              cargasList: data,
              aceitasPorcentagem: aceitosPerct,
              pendentePorcentagem: pendentesPerct,
              rejeitadasPorcentagem: rejeitadosPerct,
              key: pageState.key + 1,
            });
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });

    // CargaService.getCargasRecusadas(1)
    //   .then((data: any) => {
    //     setRecusadas(data.map((item: any) => item.cargaId));
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };
  useEffect(() => {
    buscaCargas();
  }, []);

  useEffect(() => {
    if (changeCarga === true) {
      buscaCargas();
    }
  }, [changeCarga]);

  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={12} spacing={0}>
          <CardGrafico
            key={pageState.key}
            color="#DAD8D8"
            qtdAceitas={pageState.aceitasPorcentagem}
            qtdPendente={pageState.pendentePorcentagem}
            qtdRejeitada={pageState.rejeitadasPorcentagem}
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

        {parent === 'motorista' ? (
          <Grid item xs={12} spacing={0}>
            <CardComponent
              titulo="Cargas Rejeitadas"
              quantidade={calculaCargasRecusadas()}
              color="#e41321"
            />
          </Grid>
        ) : (
          <div className={classes.hide} />
        )}

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
