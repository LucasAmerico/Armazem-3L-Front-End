import { Grid, TextField } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';
import { IPropsDataCarga } from '../../utils/interfaces';

const DataCarga = ({
  address,
  freight,
  onChangeValue,
  disabled,
}: IPropsDataCarga) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container xs={12} xl={12} className={classes.grid__padding}>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <TextField
            id="filled-search"
            label="Endereço"
            type="search"
            name="endereco"
            variant="filled"
            disabled={disabled}
            value={address}
            onChange={onChangeValue}
            className={clsx(classes.field__full, {
              [classes.field__margin]: true,
            })}
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <TextField
            id="filled-search"
            label="Valor de Frete"
            type="search"
            name="frete"
            disabled={disabled}
            value={freight}
            onChange={onChangeValue}
            variant="filled"
            className={classes.field__full}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default DataCarga;
