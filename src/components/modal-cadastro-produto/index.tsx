/* eslint-disable no-param-reassign */
import React, { ChangeEvent, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import clsx from 'clsx';
import { Backdrop, Button, Fade, Grid, Modal } from '@material-ui/core';
import { toast } from 'react-toastify';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';
import { IPropsCadastroProduto, Produto } from '../../utils/interfaces';
import ProdutoService from '../../services/ProdutoService';
import FormProduct from '../form-product';
import MESSAGES from '../../constants/MESSAGES';

const CadastroProduto = ({ modal, onClose }: IPropsCadastroProduto) => {
  const classes = useStyles();

  const open = useRecoilValue(GlobalStates.sideBarState);
  const setSaveProduto = useSetRecoilState(GlobalStates.saveProduto);
  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    peso: '',
    qtd: '',
  });

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
