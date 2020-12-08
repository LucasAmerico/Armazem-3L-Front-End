import clsx from 'clsx';
import React from 'react';
import { useRecoilState } from 'recoil';
import { Grid } from '@material-ui/core';
import useWindowDimensions from '../../utils/windowsDimension';
import useStyles from './styles';
import GlobalStates from '../../recoil/atom';
import ProdutosLista from '../../components/produtos-list';

const ProdutosPage = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useRecoilState(GlobalStates.sideBarState);

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
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <ProdutosLista />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProdutosPage;
