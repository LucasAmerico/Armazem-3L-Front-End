import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Backdrop,
  Button,
  Fade,
  FilledInput,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
} from '@material-ui/core';
import { Email, Visibility, VisibilityOff } from '@material-ui/icons';
import SaveIcon from '@material-ui/icons/Save';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { toast } from 'react-toastify';
import useStyles from './styles';
import { IPropsRecuperarSenha } from '../../utils/interfaces';
import MESSAGES from '../../constants/MESSAGES';
import MotoristaService from '../../services/MotoristaService';
// import clsx from 'clsx';

const RecuperarSenha = ({ modal, onClose }: IPropsRecuperarSenha) => {
  const classes = useStyles();
  const [recuperarSenha, setRecuperarSenha] = useState({
    email: '',
    senha: '',
    senhaRepetida: '',
  });
  const [emailValido, setEmailValido] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRecuperarSenha({ ...recuperarSenha, [name]: value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  const verificarEmail = () => {
    if (recuperarSenha.email !== '') {
      MotoristaService.postVerificarMotorista(recuperarSenha)
        .then((res) => {
          if (res) {
            setEmailValido(true);
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
    onClose();
    setEmailValido(false);
  };
  const validarSenha = () => {
    if (
      recuperarSenha.senhaRepetida === recuperarSenha.senha &&
      recuperarSenha.senha !== ''
    ) {
      MotoristaService.putRecuperarSenhaMotorista(recuperarSenha)
        .then((res) => {
          toast.success(MESSAGES.recuperar_senha_Sucesso);
          handleClose();
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      toast.error('Tente novamente!');
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modal}
        onClose={handleClose}
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
                <Grid>
                  <h2
                    id="transition-modal-title"
                    className={classes.modal__title}
                  >
                    Recuperar senha
                  </h2>
                </Grid>
                <Grid>
                  {emailValido ? (
                    <div>
                      <Grid>
                        <FormControl
                          // className={clsx(classes.margin, classes.textField)}
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
                                  {showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Grid>
                      <Grid>
                        <FormControl
                          // className={clsx(classes.margin, classes.textField)}
                          variant="filled"
                        >
                          <InputLabel htmlFor="filled-adornment-password2">
                            Repita sua senha
                          </InputLabel>
                          <FilledInput
                            id="filled-adornment-password2"
                            type="password"
                            value={recuperarSenha.senhaRepetida}
                            name="senhaRepetida"
                            onChange={handleInputChange}
                          />
                        </FormControl>
                      </Grid>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        // className={classes.button}
                        startIcon={<SaveIcon />}
                        aria-label="button"
                        onClick={validarSenha}
                      >
                        Salvar
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <FormControl
                        // className={clsx(classes.margin, classes.textField)}
                        variant="filled"
                      >
                        <FilledInput
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
                        <FormHelperText id="filled-weight-helper-text">
                          Insira um e-mail já cadastrado
                        </FormHelperText>
                        <Grid>
                          <Button
                            variant="contained"
                            color="inherit"
                            size="small"
                            // className={classes.button}
                            startIcon={<VerifiedUserIcon />}
                            aria-label="button"
                            onClick={verificarEmail}
                          >
                            Verificar
                          </Button>
                        </Grid>
                      </FormControl>
                    </div>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default RecuperarSenha;
