import {
  Button,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import useStyles from './styles';
import { IPropsFormCadastroMotorista } from '../../utils/interfaces';

const FormCadastroMotorista = ({
  nome,
  login,
  email,
  senha,
  onChangeValue,
  handleSave,
}: IPropsFormCadastroMotorista) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Grid
        container
        xs={6}
        className={classes.grid__padding}
        data-testid="form"
      >
        <Grid item xs={8} className={clsx(classes.buttons__flex)}>
          <Typography variant="h4" component="h4">
            Cadastro
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="filled-name"
            label="Nome"
            type="text"
            name="nome"
            variant="filled"
            value={nome}
            onChange={onChangeValue}
            className={clsx(classes.margin, classes.field__full, {
              [classes.field__margin]: true,
            })}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="filled-name"
            label="Login"
            type="text"
            name="login"
            variant="filled"
            value={login}
            onChange={onChangeValue}
            className={clsx(classes.margin, classes.field__full, {
              [classes.field__margin]: true,
            })}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="filled-email"
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={onChangeValue}
            variant="filled"
            className={clsx(classes.margin, classes.field__full, {
              [classes.field__margin]: true,
            })}
          />
        </Grid>
        <Grid item xs={8}>
          <FormControl
            className={clsx(classes.margin, classes.field__full, {
              [classes.field__margin]: true,
            })}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="senha"
              value={senha}
              onChange={onChangeValue}
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
        </Grid>
        <Grid item xs={8} className={clsx(classes.buttons__flex)}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormCadastroMotorista;
