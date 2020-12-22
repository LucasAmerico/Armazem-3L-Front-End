import { Grid, TextField } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';
import { IPropsFormProduct } from '../../utils/interfaces';

const FormProduct = ({
  name,
  weight,
  price,
  qtd,
  onChangeValue,
  disabled,
}: IPropsFormProduct) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container xs={12} xl={12} className={classes.grid__padding}>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <TextField
            id="filled-search"
            label="Nome"
            type="search"
            disabled={disabled}
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
            id="filled-search"
            label="Preço"
            type="search"
            disabled={disabled}
            name="preco"
            value={price}
            onChange={onChangeValue}
            variant="filled"
            className={classes.field__full}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <TextField
            id="filled-search"
            label="Peso"
            type="search"
            disabled={disabled}
            name="peso"
            variant="filled"
            value={weight}
            onChange={onChangeValue}
            className={clsx(classes.field__full, {
              [classes.field__margin]: true,
            })}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <TextField
            id="filled-search"
            label="Quantidade"
            disabled={disabled}
            type="number"
            name="qtd"
            value={qtd}
            onChange={onChangeValue}
            variant="filled"
            className={classes.field__full}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default FormProduct;
