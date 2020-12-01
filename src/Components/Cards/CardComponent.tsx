import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

interface Props {
  titulo: string;
  quantidade: string;
  color: string;
}
const CardComponent = ({ titulo, quantidade, color }: Props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ backgroundColor: color }}>
      <CardContent style={{ padding: '25px' }}>
        <Typography variant="h5" component="h2">
          {titulo}
        </Typography>
        <Typography variant="h4" component="h2">
          {quantidade}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
