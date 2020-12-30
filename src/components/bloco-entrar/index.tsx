import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import useStyles from './styles';
import GlobalStates from '../../recoil/atom';

const Entrar = () => {
  const classes = useStyles();
  const setBloco = useSetRecoilState(GlobalStates.bloco);

  const handleClick = () => {
    setBloco(0);
  };

  return (
    <div className={classes.modal__left} data-testid="data-testid">
      <Typography variant="h4" className={classes.modal__subTitle}>
        Bem vindo(a)!
      </Typography>
      <Typography variant="h5" className={classes.modal__text}>
        Já possui cadastro? por favor entre com seus dados
      </Typography>
      <div className={classes.modal__button}>
        <Button
          variant="contained"
          color="default"
          onClick={handleClick}
          className={classes.modal__buttonColor}
          data-testid="button"
        >
          Entrar
        </Button>
      </div>
    </div>
  );
};

export default Entrar;
