/* eslint-disable no-param-reassign */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import clsx from 'clsx';
import { Backdrop, Button, Fade, Grid, Modal } from '@material-ui/core';
import { toast } from 'react-toastify';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';
import useWindowDimensions from '../../utils/windowsDimension';
import api from '../../services/api';
import {
  Carga,
  IPropsCadastroCarga,
  IPropsCadastroProduto,
  Produto,
  ProdutoList,
} from '../../utils/interfaces';
import ProdutoService from '../../services/ProdutoService';
import DataCarga from '../chose-products/DataCarga';
import ListProducts from '../list-products/ListProducts';
import FormProduct from '../form-product';
import MESSAGES from '../../constants/MESSAGES';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const CadastroProduto = ({ modal, onClose }: IPropsCadastroProduto) => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(GlobalStates.sideBarState);
  const [saveProduto, setSaveProduto] = useRecoilState(
    GlobalStates.saveProduto,
  );
  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    peso: '',
    qtd: '',
  });
  const [modalStyle] = useState(getModalStyle);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handlePosSave = () => {
    setProduto({ ...produto, nome: '', preco: '', peso: '', qtd: '' });
  };

  const handleSave = () => {
    const { nome, preco, peso, qtd } = produto;

    const newProduto: Produto = {
      nome,
      preco: Number(preco),
      qtd: Number(qtd),
      peso: Number(peso),
    };

    ProdutoService.postProduto(newProduto)
      .then((res) => {
        handlePosSave();
        setSaveProduto(true);
        toast.success(MESSAGES.cadastrar_Produto_Sucesso);
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
      >
        <Fade in={modal}>
          <div className={classes.paper}>
            <Grid container xs={12} xl={12}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <h2
                  id="transition-modal-title"
                  className={classes.modal__title}
                >
                  Cadastro de Produto
                </h2>
              </Grid>
            </Grid>
            <FormProduct
              name={produto.nome}
              weight={produto.peso}
              price={produto.preco}
              qtd={produto.qtd}
              disabled={false}
              onChangeValue={handleInputChange}
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

export default CadastroProduto;
