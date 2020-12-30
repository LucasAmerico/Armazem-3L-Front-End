import {
  Button,
  FilledInput,
  InputAdornment,
  TextField,
  IconButton,
  Typography,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import clsx from 'clsx';
import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import GlobalStates from '../../recoil/atom';
import MotoristaService from '../../services/MotoristaService';
import usuarioEnum from '../../utils/enum/usuarioEnum';
import useStyles from './styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import encryptMD5 from '../../utils/security';

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [input, setInput] = useState({ login: '', senha: '' });
  const setLogin = useSetRecoilState(GlobalStates.login);
  const setCurrentUser = useSetRecoilState(GlobalStates.currentUser);
  const setBloco = useSetRecoilState(GlobalStates.bloco);
  const [showPassword, setShowPassword] = useState(false);

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
      senha: encryptMD5(senha),
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
    <div className={classes.modal__right} data-testid="data-testid">
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
            inputProps={{ 'aria-label': 'login', 'data-testid': 'login' }}
            size="small"
            onChange={handleChange}
            className={classes.modal__input}
          />
          <div className={classes.modal__input}>
            <FormControl
              className={clsx(classes.modal__inputWidth)}
              variant="filled"
            >
              <InputLabel htmlFor="filled-adornment-password">Senha</InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                name="senha"
                value={input.senha}
                inputProps={{ 'aria-label': 'senha', 'data-testid': 'senha' }}
                onChange={handleChange}
                className={clsx(
                  classes.modal__inputWidth,
                  classes.modal__passwordField,
                )}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
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
              aria-label="button"
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
