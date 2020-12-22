import clsx from 'clsx';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import GlobalStates from '../../recoil/atom';
import ProdutosLista from './components/produtos-list';

const ProdutosPage = () => {
  const classes = useStyles();
  const open = useRecoilValue(GlobalStates.sideBarState);

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: open,
        [classes.contentDisplay]: true,
      })}
    >
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.produtosDisplay}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProdutosLista />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProdutosPage;
