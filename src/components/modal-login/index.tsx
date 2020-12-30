/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import clsx from 'clsx';
import { Backdrop, Fade, Modal } from '@material-ui/core';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';
import { IPropsLogin } from '../../utils/interfaces';
import Entrar from '../bloco-entrar';
import Cadastrar from '../bloco-cadastrar';
import Login from '../login';
import Registro from '../registrar';
import RecuperarSenha from '../recuperar-senha';

const ModalLogin = ({ modal }: IPropsLogin) => {
  const classes = useStyles();
  const open = useRecoilValue(GlobalStates.sideBarState);
  const setLogin = useSetRecoilState(GlobalStates.login);
  const [bloco, setBloco] = useRecoilState(GlobalStates.bloco);

  const handleBackdropClose = () => {
    setLogin(false);
    setBloco(0);
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
        closeAfterTransition
        BackdropComponent={Backdrop}
        onBackdropClick={handleBackdropClose}
        BackdropProps={{
          timeout: 500,
        }}
        data-testid="modal-test"
      >
        <Fade in={modal}>
          <div className={classes.paper}>
            <div className={classes.modal__login}>
              {bloco === 0 ? (
                <>
                  <Cadastrar />
                  <Login />
                </>
              ) : bloco === 1 ? (
                <>
                  <Entrar />
                  <Registro />
                </>
              ) : bloco === 2 ? (
                <>
                  <Entrar />
                  <RecuperarSenha />
                </>
              ) : null}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalLogin;
