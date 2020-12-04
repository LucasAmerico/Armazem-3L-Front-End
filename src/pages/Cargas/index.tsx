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
import sideBarState from '../../recoil/atom';
import DialogConfirmAction from '../../components/Dialog/DialogConfirmAction';

const CargasPage = () => {
  const [pageState, setPageState] = useState({
    cargasList: [],
    openConfirmActionModal: false,
    selectedDeleteId: undefined,
  });

  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(sideBarState);

  const handleConfirmActionModalOpen = (id: any) => {
    console.log(`handleConfirmActionModalOpen ${id}`);
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
    findCargaList();
  }, []);

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: open,
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
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={5}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={8}>
              <Typography variant="h4"> Listagem de cargas </Typography>
            </Grid>
            <Grid container item xs={4} className={classes.actionContainer}>
              <Button
                variant="contained"
                size="small"
                className={classes.button}
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
          {pageState.cargasList.length > 0 ? (
            <Grid container item xs={12} spacing={3}>
              <Lista
                content={pageState.cargasList}
                onAction={handleConfirmActionModalOpen}
              />
            </Grid>
          ) : (
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.align}>
                Você não tem cargas cadastradas no momento.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default CargasPage;
