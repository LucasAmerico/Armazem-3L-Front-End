import React, { useEffect, useState } from 'react';
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

const CargaLista = () => {
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
    <div>
      <CadastroCarga modal={openModal} onClose={handleClose} />
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
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} spacing={3}>
          <Lista titulo="Listagem de cargas" conteudo={pageState.cargasList} />
        </Grid>
      </Container>
    </div>
  );
};

export default CargaLista;
