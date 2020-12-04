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
import GlobalStates from '../../recoil/atom';
import CadastroCarga from '../../components/modal-cadastro-carga/CadastroCarga';

const CargasPage = () => {
  const [pageState, setPageState] = useState({
    cargasList: [],
  });
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(GlobalStates.sideBarState);
  const [saveCarga, setSaveCarga] = useRecoilState(GlobalStates.saveCarga);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
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
  }, []);

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
      })}
    >
      <CadastroCarga modal={openModal} onClose={handleClose} />
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
            <Lista
              titulo="Listagem de cargas"
              conteudo={pageState.cargasList}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CargasPage;
