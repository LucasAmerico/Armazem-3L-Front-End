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
import { toast } from 'react-toastify';
import useStyles from './styles';
import GlobalStates from '../../../../recoil/atom';
import CargaService from '../../../../services/CargaService';
import CadastroCarga from '../../../../components/modal-cadastro-carga/CadastroCarga';
import Lista from '../../../../components/list/list';
import { Carga } from '../../../../utils/interfaces';
import DialogConfirmAction from '../../../../components/dialog/DialogConfirmAction';
import DetalhesCarga from '../../../../components/modal-detalhes-carga';
import MESSAGES from '../../../../constants/MESSAGES';

const CargaLista = () => {
  const [pageState, setPageState] = useState({
    cargasList: [] as Carga[],
    cargasListAux: [] as Carga[],
    selectedDeleteId: 0,
  });
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useRecoilState(GlobalStates.openDialog);
  const [changeCarga, setChangeCarga] = useRecoilState(
    GlobalStates.changeCarga,
  );
  const [openDetalhe, setOpenDetalhe] = useRecoilState(
    GlobalStates.openDetalhe,
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
    if (changeCarga === true) {
      buscarLista();
      setOpenModal(false);
      setChangeCarga(false);
    }
  }, [changeCarga]);

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
        handlePosDelete();
        toast.success(MESSAGES.deletar_Carga_Sucesso);
      })
      .catch((error) => {
        handlePosDelete();
        toast.error(error);
      });
  };

  return (
    <div>
      <DialogConfirmAction
        open={openDialog.open}
        title="Deseja deletar carga?"
        content="A carga selecionada sera deletada, deseja prosseguir com esta ação?"
        leftBtnLabel="Cancelar"
        rigthBtnLabel="Ok"
        closeFunction={handleCloseDialog}
        actionFunction={handleDelete}
      />
      <CadastroCarga modal={openModal} onClose={handleClose} />
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
        data-testid="data-testid"
      >
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} spacing={3}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h4" data-testid="title">
              {' '}
              Listagem de cargas{' '}
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
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            onClick={handleOpen}
            aria-label="button"
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
              inputProps={{ 'aria-label': 'search', 'data-testid': 'search' }}
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
