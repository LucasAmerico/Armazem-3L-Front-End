/* eslint-disable no-param-reassign */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import clsx from 'clsx';
import { Backdrop, Button, Fade, Grid, Modal } from '@material-ui/core';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';
import useWindowDimensions from '../../utils/windowsDimension';
import { Carga, Produto, IPropsDetalhesCarga } from '../../utils/interfaces';
import DataCarga from '../chose-products/DataCarga';
import DetalhesListProducts from '../detalhes-list-products/DetalhesListProducts';

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

const DetalhesCarga = ({ carga, modal, onClose }: IPropsDetalhesCarga) => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(GlobalStates.sideBarState);
  const [filtro, setFiltro] = useState<string>('');
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    if (carga?.listaProdutos !== undefined) {
      setProdutos(carga.listaProdutos);
    }
  }, [carga]);

  useEffect(() => {
    if (carga?.listaProdutos !== undefined) {
      if (carga.listaProdutos.length > 0) {
        const filtrados = carga!.listaProdutos!.filter((item) =>
          item.produto.nome.toLowerCase().includes(filtro),
        );

        // eslint-disable-next-line no-unused-expressions
        filtro.length === 0
          ? setProdutos(carga!.listaProdutos!)
          : setProdutos(filtrados);
      }
    }
  }, [filtro]);

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFiltro(event.target.value.toLocaleLowerCase());
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
                  Detalhes de Carga
                </h2>
              </Grid>
            </Grid>
            <DataCarga
              address={carga?.endereco}
              freight={`${carga?.frete}`}
              disabled
              onChangeValue={() => {}}
            />
            <DetalhesListProducts
              produtos={produtos}
              title="Lista de produtos"
              filtro={filtro}
              onChangeFilterValue={handleFilter}
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

export default DetalhesCarga;
