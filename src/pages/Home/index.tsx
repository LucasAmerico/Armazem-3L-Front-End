/* eslint-disable linebreak-style */
import React from 'react';
import { Grid, Button } from '@material-ui/core';
import classNames from 'classnames';
import { FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';
import useStyles from './styles';
import useWindowDimensions from '../../utils/windowsDimension';

const HomePage = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  return (
    <div className={classes.root}>
      width: {width} ~ height: {height}
      <h2>Welcome to Armazenagem</h2>
    </div>
  );
};

export default HomePage;
