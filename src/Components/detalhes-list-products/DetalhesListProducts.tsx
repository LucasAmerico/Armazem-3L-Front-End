import { Divider, Grid, Paper, TextField } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import useWindowDimensions from '../../utils/windowsDimension';
import useStyles from './styles';
import { IPropsListProducts } from '../../utils/interfaces';

const DetalhesListProducts = ({
  produtos,
  filtro,
  title,
  onChangeFilterValue,
}: IPropsListProducts) => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container xs={12} xl={12} className={classes.paper__padding}>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            className={clsx(classes.paper__font, {
              [classes.paper__flex2]: true,
            })}
          >
            {title}
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            className={clsx(classes.paper__font, {
              [classes.paper__flex]: true,
            })}
          >
            <TextField
              id="standard-search"
              label="Filtro"
              name="filtro"
              value={filtro}
              type="search"
              onChange={onChangeFilterValue}
            />
          </Grid>
        </Grid>
        <Divider variant="middle" className={classes.paper__divider} />
        <div className={classes.paper__listProducts}>
          {produtos?.length > 0
            ? produtos.map((i) => (
                <Grid key={i.id} container xs={12} xl={12}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className={classes.paper__listInputs}
                  >
                    <Typography variant="h6">{i.nome}</Typography>
                    <TextField
                      label="Qtd"
                      type="number"
                      id="standard-size-small"
                      InputProps={{ inputProps: { min: 1, max: 999 } }}
                      defaultValue="Small"
                      value={i.qtd}
                      name={`${i.id! - 1}`}
                      size="small"
                      disabled
                      className={classes.paper__inputNumber}
                    />
                  </Grid>
                </Grid>
              ))
            : 'Produtos não encontrados.'}
        </div>
      </Paper>
    </div>
  );
};

export default DetalhesListProducts;
