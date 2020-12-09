import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  Button,
  Container,
  Grid,
  InputBase,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import useStyles from './styles';
import useWindowDimensions from '../../utils/windowsDimension';
import GlobalStates from '../../recoil/atom';
import CargaService from '../../services/CargaService';
import CadastroCarga from '../modal-cadastro-carga/CadastroCarga';
import Lista from '../List/list';
import { Carga } from '../../utils/interfaces';
import DialogConfirmAction from '../Dialog/DialogConfirmAction';
import DetalhesCarga from '../modal-detalhes-carga';

const CargaLista = () => {
  const [pageState, setPageState] = useState({
    cargasList: [] as Carga[],
    cargasListAux: [] as Carga[],
    selectedDeleteId: 0,
  });
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(GlobalStates.sideBarState);
  const [openDialog, setOpenDialog] = useRecoilState(GlobalStates.openDialog);
  const [changeCarga, setChangeCarga] = useRecoilState(
    GlobalStates.changeCarga,
  );
  const [openDetalhe, setOpenDetalhe] = useRecoilState(
    GlobalStates.openProdutoDetalhe,
  );
  const [openModal, setOpenModal] = useState(false);
  const [filtro, setFiltro] = useState<string>('');

  const buscarLista = () => {
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
    buscarLista();
  }, []);

  useEffect(() => {
    console.log(changeCarga);

    if (changeCarga === true) {
      buscarLista();
      setOpenModal(false);
      setChangeCarga(false);
    }
  }, [changeCarga]);

  useEffect(() => {
    console.log(filtro);

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

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleCloseDetalhe = () => {
    setOpenDetalhe({ ...openDetalhe, open: false });
  };

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFiltro(event.target.value.toLocaleLowerCase());
  };

  const handleCloseDialog = () => {
    setOpenDialog({ ...openDialog, open: false });
  };

  const handlePosDelete = () => {
    setOpenDialog({ ...openDialog, open: false, id: 0 });
    setChangeCarga(true);
  };

  const handleDelete = () => {
    CargaService.deleteCarga(openDialog.id)
      .then((res) => {
        alert('Sucesso');
        handlePosDelete();
      })
      .catch((error) => {
        alert('Erro ao Salvar');
        handlePosDelete();
      });
  };

  return (
    <div>
      <DialogConfirmAction
        open={openDialog.open}
        title="Deseja deletar carga?"
        content="A carga selecionada sera deletada,
        deseja prosseguir com esta ação?"
        leftBtnLabel="Cancelar"
        rigthBtnLabel="Ok"
        closeFunction={handleCloseDialog}
        actionFunction={handleDelete}
      />
      <CadastroCarga modal={openModal} onClose={handleClose} />
      {console.log(pageState.cargasList)}
      {console.log(openDetalhe)}
      <DetalhesCarga
        modal={openDetalhe.open}
        onClose={handleCloseDetalhe}
        carga={pageState.cargasList
          .filter((item: Carga) => item.id === openDetalhe.id)
          .pop()}
      />
      <Container
        maxWidth="md"
        className={clsx(classes.container, {
          [classes.container__iniWidth]: pageState.cargasList.length === 0,
        })}
      >
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} spacing={3}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h4"> Listagem de cargas </Typography>
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
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            onClick={handleOpen}
          >
            <AddIcon fontSize="large" />
          </Button>
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
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleFilter}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} spacing={3}>
          <Lista content={pageState.cargasList} parent="carga" />
        </Grid>
      </Container>
    </div>
  );
};

export default CargaLista;
