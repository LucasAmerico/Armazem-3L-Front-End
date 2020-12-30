/* eslint-disable no-param-reassign */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import clsx from 'clsx';
import { Backdrop, Button, Fade, Grid, Modal } from '@material-ui/core';
import { toast } from 'react-toastify';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';
import api from '../../services/api';
import {
  Carga,
  IPropsCadastroCarga,
  Produto,
  ProdutoList,
} from '../../utils/interfaces';
import CargaService from '../../services/CargaService';
import DataCarga from '../chose-products/DataCarga';
import ListProducts from '../list-products/ListProducts';
import MESSAGES from '../../constants/MESSAGES';

const CadastroCarga = ({ modal, onClose }: IPropsCadastroCarga) => {
  const classes = useStyles();
  const open = useRecoilValue(GlobalStates.sideBarState);
  const setchangeCarga = useSetRecoilState(GlobalStates.changeCarga);
  const [carga, setCarga] = useState({ endereco: '', frete: '' });
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filtro, setFiltro] = useState<string>('');
  const [prodState, setProdState] = useState<boolean[]>([]);
  const [produtosAux, setProdutosAux] = useState<Produto[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  useEffect(() => {
    api.get('produto/listagem').then((res) => {
      const { data } = res;

      setProdState(Array.from({ length: data.length }, (_, i) => false));
      setProdutos(data);
      setProdutosAux(data);
    });
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCarga({ ...carga, [name]: value });
  };

  useEffect(() => {
    const filtrados = produtosAux.filter((item) =>
      item.nome.toLowerCase().includes(filtro),
    );

    // eslint-disable-next-line no-unused-expressions
    filtro.length === 0 ? setProdutos(produtosAux) : setProdutos(filtrados);
  }, [filtro]);

  const qtdsReset = (idx?: number) => {
    const prods = [...produtos];
    if (idx === undefined) {
      prods.forEach((item: Produto) => {
        item.qtdCarga = 0;
      });
    } else {
      prods[idx].qtdCarga = 0;
    }
    setProdutos(() => prods);
  };

  const handleUnselectAllItens = () => {
    let array = [...prodState];
    array = array.map((item, idx) => {
      return false;
    });
    setProdState(array);
    qtdsReset();
  };

  const handleSelectAllItens = () => {
    if (selectAll === false) {
      let array = [...prodState];
      array = array.map((item, idx) => {
        return true;
      });

      setProdState(array);
      setSelectAll(() => !selectAll);
    } else {
      setSelectAll(() => !selectAll);
    }
  };

  const handleChangeQtd = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const prods = [...produtos];
    prods[Number(name)].qtdCarga = Number(value);

    setProdutos(() => prods);
  };

  const handleIfSelectAllTrue = () => {
    if (selectAll === true) {
      setSelectAll(() => false);
    }
  };

  const handleSelectItem = (event: ChangeEvent<HTMLInputElement>) => {
    const array = [...prodState];
    if (array[Number([event.target.name])] === true) {
      qtdsReset(Number(event.target.name));
    }
    array[Number([event.target.name])] = !array[Number([event.target.name])];
    setProdState(array);
    if (selectAll === true) {
      handleIfSelectAllTrue();
    }
  };

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFiltro(event.target.value.toLocaleLowerCase());
  };

  const handlePosSave = () => {
    setCarga({ ...carga, endereco: '', frete: '' });
    handleUnselectAllItens();
  };

  const handleSave = () => {
    const { endereco, frete } = carga;
    const produtosCarga: ProdutoList[] = produtos
      .filter((item: Produto, idx: number) => prodState[idx] === true)
      .map(({ id, qtdCarga }) => ({ produtoId: id, qtd: qtdCarga }));

    const newCarga: Carga = {
      endereco,
      motoristaId: 0,
      frete: Number(frete),
      produtos: produtosCarga,
    };

    CargaService.postCarga(newCarga)
      .then((res) => {
        handlePosSave();
        setchangeCarga(true);
        toast.success(MESSAGES.cadastrar_Carga_Sucesso);
      })
      .catch((error) => {
        handlePosSave();
        toast.error(error);
      });
  };

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modal}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        data-testid="modal-test"
      >
        <Fade in={modal}>
          <div className={classes.paper}>
            <Grid container xs={12} xl={12}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <h2
                  id="transition-modal-title"
                  className={classes.modal__title}
                >
                  Cadastro de Carga
                </h2>
              </Grid>
            </Grid>
            <DataCarga
              address={carga.endereco}
              freight={carga.frete}
              onChangeValue={handleInputChange}
              disabled={false}
              data-testid="dados"
            />
            <ListProducts
              produtos={produtos}
              prodState={prodState}
              selectAll={selectAll}
              onIfSelectAllTrue={handleIfSelectAllTrue}
              onSelectAllItens={handleSelectAllItens}
              onSelectItem={handleSelectItem}
              onUnselectAllItens={handleUnselectAllItens}
              filtro={filtro}
              onChangeFilterValue={handleFilter}
              onChangeQtd={handleChangeQtd}
              data-testid="lista-dados"
            />
            <Grid container xs={12} xl={12} className={classes.modal__buttons}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.modal__buttonsFlex}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.modal__buttonMargin}
                  onClick={handleSave}
                >
                  Salvar
                </Button>
                <Button variant="contained" color="default" onClick={onClose}>
                  Fechar
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CadastroCarga;
