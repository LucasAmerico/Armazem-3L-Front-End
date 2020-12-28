import {
  Button,
  FilledInput,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import useStyles from './styles';
import { IPropsFormCadastroMotorista } from '../../utils/interfaces';

const FormCadastroMotorista = ({
  name,
  email,
  senha,
  onChangeValue,
  handleSave,
}: IPropsFormCadastroMotorista) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Grid container xs={12} xl={12} className={classes.grid__padding}>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <TextField
            id="filled-name"
            label="Nome"
            type="name"
            name="nome"
            variant="filled"
            value={name}
            onChange={onChangeValue}
            className={clsx(classes.field__full, {
              [classes.field__margin]: true,
            })}
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <TextField
            id="filled-email"
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={onChangeValue}
            variant="filled"
            className={classes.field__full}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
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
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Button onClick={handleSave} color="default" autoFocus>
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormCadastroMotorista;
