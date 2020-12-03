import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import useStyles from './styles';

interface Props {
  titulo: string;
  color: string;
}
const CardGrafico = ({ titulo, color }: Props) => {
  const [styleProps, setStyleProps] = useState({
    color: '#DAD8D8',
  });
  useEffect(() => {
    setStyleProps({ ...styleProps, color });
  }, []);
  const classes = useStyles(styleProps);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid alignItems="center" spacing={3}>
          <Chart />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardGrafico;
