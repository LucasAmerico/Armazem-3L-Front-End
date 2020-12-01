/* eslint-disable linebreak-style */
import React from 'react';
import useStyles from './styles';
import useWindowDimensions from '../../utils/windowsDimension';
import Lista from '../../components/Lista/lista'

const HomePage = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  return (
    <div className={classes.root}>
      width: {width} ~ height: {height}
      <h2>Welcome to Armazenagem</h2>
      <Lista />
    </div>
  );
};

export default HomePage;
