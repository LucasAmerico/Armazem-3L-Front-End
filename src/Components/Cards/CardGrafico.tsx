import { Card, CardContent, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
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
      <CardContent className={classes.cardMargin}>
        <Typography variant="h5" component="h2">
          {titulo}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardGrafico;
