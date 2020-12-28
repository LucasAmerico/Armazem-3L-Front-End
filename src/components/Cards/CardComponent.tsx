import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

interface Props {
  titulo: string;
  quantidade: any;
  color: string;
}

const CardComponent = ({ titulo, quantidade, color }: Props) => {
  const [styleProps, setStyleProps] = useState({
    color: '#DAD8D8',
  });
  useEffect(() => {
    setStyleProps({ ...styleProps, color });
  }, []);
  const classes = useStyles(styleProps);
  return (
    <Card className={classes.root} data-testid="card">
      <CardContent className={classes.cardMargin}>
        <Typography variant="h5" component="h5">
          {titulo}
        </Typography>
        <Typography variant="h4" component="h4">
          {quantidade}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
