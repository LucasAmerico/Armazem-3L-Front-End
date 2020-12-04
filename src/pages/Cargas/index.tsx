/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import clsx from 'clsx';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import InputBase from '@material-ui/core/InputBase/InputBase';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import CargaService from '../../services/CargaService';
import Lista from '../../components/List/list';
import useWindowDimensions from '../../utils/windowsDimension';
import useStyles from './styles';
import DialogConfirmAction from '../../components/Dialog/DialogConfirmAction';
import GlobalStates from '../../recoil/atom';
import CadastroCarga from '../../components/modal-cadastro-carga/CadastroCarga';
import CardDashboard from '../../components/cards-dashboard';

const CargasPage = () => {
  const [pageState, setPageState] = useState({
    cargasList: [],
    openConfirmActionModal: false,
    selectedDeleteId: undefined,
  });
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(GlobalStates.sideBarState);
  const [saveCarga, setSaveCarga] = useRecoilState(GlobalStates.saveCarga);
  const [openModal, setOpenModal] = useState(false);

  const handleConfirmActionModalOpen = (id: any) => {
    setPageState({
      ...pageState,
      openConfirmActionModal: true,
      selectedDeleteId: id,
    });
  };

  const handleConfirmActionModalClose = () => {
    setPageState({
      ...pageState,
      openConfirmActionModal: false,
      selectedDeleteId: undefined,
    });
  };

  function findCargaList() {
    CargaService.getCarga()
      .then((data) => {
        setPageState({
          ...pageState,
          cargasList: data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function deleteCarga() {
    handleConfirmActionModalClose();
    if (pageState.selectedDeleteId) {
      CargaService.deleteCarga(pageState.selectedDeleteId)
        .then(() => {
          findCargaList();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
  useEffect(() => {
    console.log(saveCarga);

    if (saveCarga === true) {
      CargaService.getCarga()
        .then((data) => {
          setPageState({
            ...pageState,
            cargasList: data,
          });
        })
        .catch((e) => {
          console.log(e);
        });
      setOpenModal(false);
      setSaveCarga(false);
    }
  }, [saveCarga]);

  useEffect(() => {
    findCargaList();
  }, []);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: open,
        [classes.contentDisplay]: true,
      })}
    >
      <DialogConfirmAction
        open={pageState.openConfirmActionModal}
        title="Deseja deletar carga?"
        content="A carga selecionada sera deletada, deseja prosseguir com esta ação?"
        leftBtnLabel="Cancelar"
        rigthBtnLabel="Ok"
        closeFunction={() => handleConfirmActionModalClose()}
        actionFunction={() => deleteCarga()}
      />
      <CadastroCarga modal={openModal} onClose={handleClose} />
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.containerPadding}
      >
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <Container maxWidth="md" className={classes.container}>
            <Grid container spacing={5}>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                spacing={3}
              >
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Typography variant="h4"> Listagem de cargas </Typography>
                </Grid>
                <Grid
                  container
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                  className={classes.actionContainer}
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
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={3}>
                <Lista content={pageState.cargasList} onAction={() => {}} />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} justify="flex-end">
          <CardDashboard />
        </Grid>
      </Grid>
    </div>
  );
};

export default CargasPage;
