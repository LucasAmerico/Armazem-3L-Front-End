/* eslint-disable react/jsx-props-no-spreading */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import useStyles from './styles';
import useWindowDimensions from '../../utils/windowsDimension';
import GlobalStates from '../../recoil/atom';
import ProdutosService from '../../services/ProdutoService';
import CadastroCarga from '../modal-cadastro-carga/CadastroCarga';
import Lista from '../List/list';
import {
  Carga,
  CargaMotorista,
  Produto,
  TabPanelProps,
} from '../../utils/interfaces';
import CadastroProduto from '../modal-cadastro-produto';
import DialogRmProduto from '../dialog-deletar-produto';
import DetalhesProduto from '../modal-detalhe-produto';
import CargaService from '../../services/CargaService';
import DetalhesCarga from '../modal-detalhe-carga';
import DialogAccCarga from '../dialog-aceitar-carga';
import DialogRecCarga from '../dialog-recusar-carga';

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
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(GlobalStates.sideBarState);
  const [openDialog, setOpenDialog] = useRecoilState(GlobalStates.openDialog);
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

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabAtivo({ ...tabAtivo, value: newValue });
  };

  useEffect(() => {
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
  }, []);

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
  };

  useEffect(() => {
    const filtrados = pageState.cargasListAux.filter((item) =>
      item.endereco.toLowerCase().includes(filtro),
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
    attData();
  };

  const handlePosRecCarga = () => {
    setOpenDialogRecCarga({ ...openDialogRecCarga, open: false, id: 0 });
    attData();
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
      })
      .then((error) => {
        handlePosAccCarga();
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
      })
      .then((error) => {
        handlePosRecCarga();
      });
  };

  return (
    <div data-testid="test">
      <Container maxWidth="lg" className={clsx(classes.container, {})}>
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} spacing={3}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h4"> Fretes </Typography>
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
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{
                'aria-label': 'search',
                'data-testid': 'input-filtro',
              }}
              onChange={handleFilter}
            />
          </div>
        </Grid>
        <div className={classes.root}>
          <AppBar position="static">
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
                titulo="Listagem de cargas"
                conteudo={pageState.cargasList.filter(
                  (item) =>
                    item.motoristaId === 0 && !recusadas.includes(item.id!),
                )}
                parent="motorista"
              />
            </Grid>
          </TabPanel>
          <TabPanel value={tabAtivo.value} index={1} style={classes.noPadding}>
            <Lista
              titulo="Listagem de cargas"
              conteudo={pageState.cargasList.filter(
                (item) => item.motoristaId === 1,
              )}
              parent="motorista"
            />
          </TabPanel>
          <TabPanel value={tabAtivo.value} index={2} style={classes.noPadding}>
            <Lista
              titulo="Listagem de cargas"
              conteudo={pageState.cargasList.filter((item) =>
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
        openM={openDetalhe.open}
        onClose={handleCloseDetalhe}
        carga={pageState.cargasList
          .filter((item: Carga) => item.id === openDetalhe.id)
          .pop()}
      />
    </div>
  );
};

export default Fretamento;
