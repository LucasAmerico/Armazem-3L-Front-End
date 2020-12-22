/* eslint-disable no-param-reassign */
import React from 'react';
import { useRecoilValue } from 'recoil';
import clsx from 'clsx';
import { Backdrop, Button, Fade, Grid, Modal } from '@material-ui/core';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';
import { IPropsDetalhesCarga } from '../../utils/interfaces';
import DataCarga from '../chose-products/DataCarga';

const DetalhesCarga = ({ carga, modal, onClose }: IPropsDetalhesCarga) => {
  const classes = useStyles();
  const open = useRecoilValue(GlobalStates.sideBarState);

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
                  Detalhes da Carga
                </h2>
              </Grid>
            </Grid>
            <DataCarga
              address={carga?.endereco}
              freight={`${carga?.frete}`}
              onChangeValue={() => {}}
              disabled
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
