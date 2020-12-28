import {
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import useStyles from './styles';
import { IPropsListProducts } from '../../utils/interfaces';

const ListProducts = ({
  produtos,
  prodState,
  filtro,
  selectAll,
  onSelectAllItens,
  onUnselectAllItens,
  onIfSelectAllTrue,
  onSelectItem,
  onChangeFilterValue,
  onChangeQtd,
}: IPropsListProducts) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper} data-testid="component">
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
            <Typography variant="h5">Selecionar Produtos</Typography>
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
              inputProps={{
                'data-testid': 'search',
              }}
              name="filtro"
              value={filtro}
              type="search"
              onChange={onChangeFilterValue}
            />
          </Grid>
        </Grid>
        <Grid container xs={12} xl={12} className={classes.paper__padding}>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            className={classes.paper__inlineSpace}
          >
            <FormControlLabel
              control={
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                  checkedIcon={<CheckBoxIcon fontSize="large" />}
                  name="checkedI"
                  color="primary"
                  checked={selectAll}
                  onChange={onSelectAllItens}
                />
              }
              label="Selecionar todos"
            />
            <button
              type="button"
              onClick={() => {
                onUnselectAllItens();
                onIfSelectAllTrue();
              }}
              className={classes.paper__a}
            >
              Limpar Seleção
            </button>
          </Grid>
        </Grid>
        <Divider variant="middle" className={classes.paper__divider} />
        <div className={classes.paper__listProducts}>
          {produtos.map((i, idx) => (
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
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                      checkedIcon={<CheckBoxIcon fontSize="large" />}
                      name={`${idx}`}
                      color="primary"
                      checked={prodState![idx]}
                      onChange={onSelectItem}
                    />
                  }
                  label={i.nome}
                />
                {prodState![idx] === true ? (
                  <TextField
                    label="Qtd"
                    type="number"
                    id="standard-size-small"
                    InputProps={{ inputProps: { min: 1, max: 999 } }}
                    defaultValue="Small"
                    name={`${idx}`}
                    onChange={onChangeQtd}
                    size="small"
                    className={classes.paper__inputNumber}
                  />
                ) : (
                  <div />
                )}
              </Grid>
            </Grid>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default ListProducts;
