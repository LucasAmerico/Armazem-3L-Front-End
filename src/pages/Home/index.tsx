/* eslint-disable linebreak-style */
import React from 'react';
import { Grid, Button } from '@material-ui/core';
import classNames from 'classnames';
import { FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';
import useStyles from './styles';
import useWindowDimensions from '../../utils/windowsDimension';
import CardGrafico from '../../Components/Cards/CardGrafico';
import CardComponent from '../../Components/Cards/CardComponent';

const HomePage = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  return (
    <div className={classes.root}>
      width: {width} ~height: {height}
      <h2>Welcome to Armazenagem</h2>
      <Grid container spacing={4}>
        <Grid container item xs={12} spacing={0}>
          <CardGrafico color="#DAD8D8" />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <CardComponent
            titulo="Cargas Pendentes"
            quantidade="100"
            color="#E0DC74"
          />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <CardComponent
            titulo="Cargas Aceitas"
            quantidade="100"
            color="#96BB88"
          />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <CardComponent
            titulo="Total de Cargas"
            quantidade="100"
            color="#DAD8D8"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
