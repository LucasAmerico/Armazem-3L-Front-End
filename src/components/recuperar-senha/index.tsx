import React, { ChangeEvent, useState } from 'react';
import {
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
} from '@material-ui/core';
import { Email, Visibility, VisibilityOff } from '@material-ui/icons';
import SaveIcon from '@material-ui/icons/Save';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import clsx from 'clsx';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';
import MESSAGES from '../../constants/MESSAGES';
import MotoristaService from '../../services/MotoristaService';
import encryptMD5 from '../../utils/security';

const RecuperarSenha = () => {
  const classes = useStyles();
  const [recuperarSenha, setRecuperarSenha] = useState({
    email: '',
    senha: '',
    senhaRepetida: '',
  });
  const [emailValido, setEmailValido] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRPassword, setShowRPassword] = useState(false);
  const setBloco = useSetRecoilState(GlobalStates.bloco);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRecuperarSenha({ ...recuperarSenha, [name]: value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowRPassword = () => {
    setShowRPassword(!showRPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleVerificarEmail = () => {
    if (recuperarSenha.email !== '') {
      const obj = {
        email: recuperarSenha.email,
      };

      MotoristaService.postVerificarMotorista(obj)
        .then((res) => {
          if (res) {
            toast.success('E-mail verificado com sucesso!', {
              autoClose: 800,
              onClose: () => {
                setEmailValido(true);
              },
            });
          } else {
            toast.error('E-mail não cadastrado');
          }
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      toast.error('Tente novamente!');
    }
  };
  const handleClose = () => {
    setRecuperarSenha({
      ...recuperarSenha,
      senha: '',
      senhaRepetida: '',
      email: '',
    });
    setEmailValido(false);
    setBloco(0);
  };
  const validarSenha = () => {
    if (
      recuperarSenha.senhaRepetida === recuperarSenha.senha &&
      recuperarSenha.senha !== ''
    ) {
      const obj = {
        senha: encryptMD5(recuperarSenha.senha),
        email: recuperarSenha.email,
      };

      MotoristaService.putRecuperarSenhaMotorista(obj)
        .then((res) => {
          toast.success(MESSAGES.recuperar_senha_Sucesso, {
            autoClose: 800,
            onClose: () => {
              handleClose();
            },
          });
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      toast.error('Tente novamente!');
    }
  };

  return (
    <div className={classes.paper} data-testid="recuperar-senha">
      <Grid container sm={12}>
        <Grid item sm={12}>
          <Grid>
            <h2 id="transition-modal-title" className={classes.modal__title}>
              Recuperar senha
            </h2>
          </Grid>
          <Grid>
            {emailValido ? (
              <div>
                <Grid data-testid="informa-senha">
                  <FormControl
                    className={clsx(
                      classes.modal__paddingFields,
                      classes.modal__fieldFull,
                    )}
                    variant="filled"
                  >
                    <InputLabel htmlFor="filled-adornment-password">
                      Insira uma nova senha
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={recuperarSenha.senha}
                      name="senha"
                      onChange={handleInputChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid data-testid="informa-senharepetida">
                  <FormControl
                    className={classes.modal__fieldFull}
                    variant="filled"
                  >
                    <InputLabel htmlFor="filled-adornment-password2">
                      Repita sua senha
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-password2"
                      type={showRPassword ? 'text' : 'password'}
                      value={recuperarSenha.senhaRepetida}
                      name="senhaRepetida"
                      onChange={handleInputChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowRPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showRPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <div className={classes.modal__buttonsFlex}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.modal__button}
                    startIcon={<SaveIcon />}
                    aria-label="button"
                    onClick={validarSenha}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            ) : (
              <div data-testid="informa-email">
                <FormControl
                  className={classes.modal__fieldFull}
                  variant="filled"
                >
                  <InputLabel htmlFor="filled-adornment-password">
                    Email
                  </InputLabel>
                  <FilledInput
                    data-testid="input-email"
                    id="filled-adornment-weight"
                    type="email"
                    value={recuperarSenha.email}
                    name="email"
                    onChange={handleInputChange}
                    aria-describedby="filled-weight-helper-text"
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                    endAdornment={
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    }
                  />
                  <FormHelperText
                    id="filled-weight-helper-text"
                    className={classes.modal__noPaddings}
                  >
                    Insira seu e-mail cadastrado
                  </FormHelperText>
                </FormControl>
                <div className={classes.modal__buttonsFlex}>
                  <Button
                    variant="contained"
                    className={classes.modal__button}
                    startIcon={<VerifiedUserIcon />}
                    aria-label="button"
                    onClick={handleVerificarEmail}
                  >
                    Verificar
                  </Button>
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RecuperarSenha;
