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
import useWindowDimensions from '../../utils/windowsDimension';
import GlobalStates from '../../recoil/atom';
import ProdutosService from '../../services/ProdutoService';
import CadastroCarga from '../modal-cadastro-carga/CadastroCarga';
import Lista from '../List/list';
import { Carga, Produto } from '../../utils/interfaces';
import CadastroProduto from '../modal-cadastro-produto';
import DialogRmProduto from '../dialog-deletar-produto';
import DetalhesProduto from '../modal-detalhe-produto';
import MESSAGES from '../../constants/MESSAGES';

const ProdutosLista = () => {
  const [pageState, setPageState] = useState({
    produtosList: [] as Produto[],
    produtosListAux: [] as Produto[],
  });
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(GlobalStates.sideBarState);
  const [openDialog, setOpenDialog] = useRecoilState(GlobalStates.openDialog);
  const [saveProduto, setSaveProduto] = useRecoilState(
    GlobalStates.saveProduto,
  );
  const [openDetalhe, setOpenDetalhe] = useRecoilState(
    GlobalStates.openDetalhe,
  );
  const [openModal, setOpenModal] = useState(false);
  const [filtro, setFiltro] = useState<string>('');

  useEffect(() => {
    ProdutosService.getProdutos()
      .then((data) => {
        setPageState({
          ...pageState,
          produtosList: data,
          produtosListAux: data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const attData = () => {
    ProdutosService.getProdutos()
      .then((data) => {
        setPageState({
          ...pageState,
          produtosList: data,
          produtosListAux: data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (saveProduto === true) {
      ProdutosService.getProdutos()
        .then((data) => {
          setPageState({
            ...pageState,
            produtosList: data,
            produtosListAux: data,
          });
        })
        .catch((e) => {
          console.log(e);
        });
      setOpenModal(false);
      setSaveProduto(false);
    }
  }, [saveProduto]);

  useEffect(() => {
    const filtrados = pageState.produtosListAux.filter((item) =>
      item.nome.toLowerCase().includes(filtro),
    );

    // eslint-disable-next-line no-unused-expressions
    filtro.length === 0
      ? setPageState({
          ...pageState,
          produtosList: pageState.produtosListAux,
        })
      : setPageState({
          ...pageState,
          produtosList: filtrados,
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
    attData();
  };

  const handleDeleteProduto = () => {
    ProdutosService.deleteProduto(openDialog.id)
      .then((res) => {
        handlePosDelete();
        toast.success(MESSAGES.deletar_Produto_Sucesso);
      })
      .catch((error) => {
        handlePosDelete();
        toast.error(error);
      });
  };

  return (
    <div>
      <CadastroProduto modal={openModal} onClose={handleClose} />
      <Container
        maxWidth="lg"
        className={clsx(classes.container, {
          [classes.container__iniWidth]: pageState.produtosList.length === 0,
        })}
      >
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} spacing={3}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h4"> Produtos </Typography>
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
          <Lista content={pageState.produtosList} parent="produto" />
        </Grid>
      </Container>
      <DialogRmProduto
        id={openDialog.id}
        open={openDialog.open}
        onClose={handleCloseDialog}
        onDelete={handleDeleteProduto}
        nome={
          pageState.produtosList
            .filter((item: Produto) => item.id === openDialog.id)
            .pop()?.nome
        }
      />
      <DetalhesProduto
        openM={openDetalhe.open}
        onClose={handleCloseDetalhe}
        produto={pageState.produtosList
          .filter((item: Produto) => item.id === openDetalhe.id)
          .pop()}
      />
    </div>
  );
};

export default ProdutosLista;
