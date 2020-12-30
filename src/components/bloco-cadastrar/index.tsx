import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';

const Cadastrar = () => {
  const classes = useStyles();
  const setBloco = useSetRecoilState(GlobalStates.bloco);

  const handleClick = () => {
    setBloco(1);
  };

  return (
    <div className={classes.modal__left} data-testid="data-testid">
      <Typography variant="h4" className={classes.modal__subTitle}>
        Bem vindo(a)!
      </Typography>
      <Typography variant="h5" className={classes.modal__text}>
        Ainda não possui cadastro? Informe seus dados e cadastre-se
      </Typography>
      <div className={classes.modal__button}>
        <Button
          variant="contained"
          color="default"
          onClick={handleClick}
          className={classes.modal__buttonColor}
          data-testid="button"
        >
          Cadastrar
        </Button>
      </div>
    </div>
  );
};

export default Cadastrar;
