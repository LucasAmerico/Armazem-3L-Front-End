import { Button, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import GlobalStates from '../../recoil/atom';
import MotoristaService from '../../services/MotoristaService';
import usuarioEnum from '../../utils/enum/usuarioEnum';
import useStyles from './styles';

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [input, setInput] = useState({ login: '', senha: '' });
  const setLogin = useSetRecoilState(GlobalStates.login);
  const setCurrentUser = useSetRecoilState(GlobalStates.currentUser);
  const setBloco = useSetRecoilState(GlobalStates.bloco);

  const handleClick = () => {
    setBloco(2);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleLogin = () => {
    const { login, senha } = input;

    const obj = {
      login,
      senha,
    };

    MotoristaService.login(obj)
      .then((res) => {
        if (res === true) {
          toast.success('Login feito com sucesso!', {
            autoClose: 800,
            onClose: () => {
              setLogin(false);
              setCurrentUser(usuarioEnum.MOTORISTA);
              localStorage.setItem('user', usuarioEnum.MOTORISTA);
              history.push('/motoristas');
            },
          });
        } else {
          toast.error(res.descricao);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.modal__right}>
      <div>
        <Typography variant="h4" className={classes.modal__subTitle}>
          Login
        </Typography>
        <div className={classes.modal__form}>
          <TextField
            label="Login"
            name="login"
            id="filled-size-small"
            value={input.login}
            variant="filled"
            size="small"
            onChange={handleChange}
            className={classes.modal__input}
          />
          <div className={classes.modal__input}>
            <TextField
              label="Senha"
              name="senha"
              id="filled-size-small"
              variant="filled"
              value={input.senha}
              type="password"
              size="small"
              onChange={handleChange}
              className={classes.modal__inputWidth}
            />
            <Button
              onClick={handleClick}
              className={classes.modal__buttonAnchor}
            >
              Esqueci a Senha
            </Button>
          </div>
          <div className={classes.modal__button}>
            <Button
              variant="contained"
              color="default"
              onClick={handleLogin}
              className={classes.modal__buttonColor}
            >
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
