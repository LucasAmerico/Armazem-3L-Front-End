/* eslint-disable react/jsx-props-no-spreading */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  AppBar,
  Box,
  Container,
  Grid,
  InputBase,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import { toast } from 'react-toastify';
import useStyles from './styles';
import GlobalStates from '../../../../recoil/atom';
import Lista from '../../../../components/list/list';
import {
  Carga,
  CargaMotorista,
  TabPanelProps,
} from '../../../../utils/interfaces';
import CargaService from '../../../../services/CargaService';
import DialogAccCarga from '../../../../components/dialog-aceitar-carga';
import DialogRecCarga from '../../../../components/dialog-recusar-carga';
import DetalhesCarga from '../../../../components/modal-detalhes-carga';
import MESSAGES from '../../../../constants/MESSAGES';

function TabPanel(props: TabPanelProps) {
  const { children, value, index, style, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {value === index && (
        <Box p={3} className={style}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Fretamento = () => {
  const [pageState, setPageState] = useState({
    cargasList: [] as Carga[],
    cargasListAux: [] as Carga[],
  });
  const [recusadas, setRecusadas] = useState<number[]>([]);
  const classes = useStyles();
  const openDialog = useRecoilValue(GlobalStates.openDialog);
  const [openDetalhe, setOpenDetalhe] = useRecoilState(
    GlobalStates.openDetalhe,
  );
  const [tabAtivo, setTabAtivo] = useRecoilState(GlobalStates.tabAtivo);
  const [filtro, setFiltro] = useState<string>('');
  const [openDialogAccCarga, setOpenDialogAccCarga] = useRecoilState(
    GlobalStates.openDialogAccCarga,
  );
  const [openDialogRecCarga, setOpenDialogRecCarga] = useRecoilState(
    GlobalStates.openDialogRecCarga,
  );
  const [changeCarga, setChangeCarga] = useRecoilState(
    GlobalStates.changeCarga,
  );

  const attData = () => {
    CargaService.getCarga()
      .then((data) => {
        setPageState({
          ...pageState,
          cargasList: data,
          cargasListAux: data,
        });
      })
      .catch((e) => {
        console.log(e);
      });

    CargaService.getCargasRecusadas(1)
      .then((data: any) => {
        setRecusadas(data.map((item: any) => item.cargaId));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (changeCarga === true) {
      attData();
      setChangeCarga(false);
    }
  }, [changeCarga]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabAtivo({ ...tabAtivo, value: newValue });
  };

  useEffect(() => {
    attData();
  }, []);

  useEffect(() => {
    const filtrados = pageState.cargasListAux.filter((item) =>
      item.endereco!.toLowerCase().includes(filtro),
    );

    // eslint-disable-next-line no-unused-expressions
    filtro.length === 0
      ? setPageState({
          ...pageState,
          cargasList: pageState.cargasListAux,
        })
      : setPageState({
          ...pageState,
          cargasList: filtrados,
        });
  }, [filtro]);

  const handleCloseDetalhe = () => {
    setOpenDetalhe({ ...openDetalhe, open: false });
  };

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFiltro(event.target.value.toLocaleLowerCase());
  };

  const handleCloseDialogAccCarga = () => {
    setOpenDialogAccCarga({ ...openDialog, open: false });
  };

  const handleCloseDialogRecCarga = () => {
    setOpenDialogRecCarga({ ...openDialog, open: false });
  };

  const handlePosAccCarga = () => {
    setOpenDialogAccCarga({ ...openDialogAccCarga, open: false, id: 0 });
    setChangeCarga(true);
  };

  const handlePosRecCarga = () => {
    setOpenDialogRecCarga({ ...openDialogRecCarga, open: false, id: 0 });
    setChangeCarga(true);
  };

  const handleAccCarga = () => {
    const cargaId = openDialogAccCarga.id;
    const motoristaId = 1;

    const data: CargaMotorista = {
      cargaId,
      motoristaId,
    };

    CargaService.postAceitarCarga(data)
      .then((res) => {
        handlePosAccCarga();
        toast.success(MESSAGES.aceitar_carga_Sucesso);
      })
      .then((error: any) => {
        handlePosAccCarga();
        toast.error(error);
      });
  };

  const handleRecCarga = () => {
    const cargaId = openDialogRecCarga.id;
    const motoristaId = 1;

    const data: CargaMotorista = {
      cargaId,
      motoristaId,
    };

    CargaService.postRecusarCarga(data)
      .then((res) => {
        handlePosRecCarga();
        toast.success(MESSAGES.rejeitar_carga_Sucesso);
      })
      .then((error: any) => {
        handlePosRecCarga();
        toast.error(error);
      });
  };

  return (
    <div data-testid="test">
      <Container maxWidth="lg" className={clsx(classes.container, {})}>
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} spacing={3}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography data-testid="title" variant="h4">
              {' '}
              Fretes{' '}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.actionContainer}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar…"
              data-testid="tabs"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{
                'aria-label': 'search',
                'data-testid': 'search',
              }}
              onChange={handleFilter}
            />
          </div>
        </Grid>
        <div className={classes.root}>
          <AppBar position="static" data-testid="data-testid">
            <Tabs
              value={tabAtivo.value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Cargas Pendentes" {...a11yProps(0)} />
              <Tab label="Cargas Aceitas" {...a11yProps(1)} />
              <Tab label="Cargas Recusadas" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={tabAtivo.value} index={0} style={classes.noPadding}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} spacing={3}>
              <Lista
                content={pageState.cargasList.filter(
                  (item) =>
                    item.motoristaId === 0 && !recusadas.includes(item.id!),
                )}
                parent="motorista"
              />
            </Grid>
          </TabPanel>
          <TabPanel value={tabAtivo.value} index={1} style={classes.noPadding}>
            <Lista
              content={pageState.cargasList.filter(
                (item) => item.motoristaId === 1,
              )}
              parent="motorista"
            />
          </TabPanel>
          <TabPanel value={tabAtivo.value} index={2} style={classes.noPadding}>
            <Lista
              content={pageState.cargasList.filter((item) =>
                recusadas.includes(item.id!),
              )}
              parent="motorista"
            />
          </TabPanel>
        </div>
      </Container>
      <DialogAccCarga
        open={openDialogAccCarga.open}
        onClose={handleCloseDialogAccCarga}
        onDelete={handleAccCarga}
      />
      <DialogRecCarga
        open={openDialogRecCarga.open}
        onClose={handleCloseDialogRecCarga}
        onDelete={handleRecCarga}
      />
      <DetalhesCarga
        modal={openDetalhe.open}
        onClose={handleCloseDetalhe}
        carga={pageState.cargasList
          .filter((item: Carga) => item.id === openDetalhe.id)
          .pop()}
      />
    </div>
  );
};

export default Fretamento;
