import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
  Button,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';
import imageEnum from '../../utils/enum/imageEnum';

interface Props {
  titulo: string;
  rota: any;
  tipoUsuario: string;
  alt: string;
}

const CardUsers = ({ titulo, rota, tipoUsuario, alt }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={titulo}
          height="140"
          image={imageEnum(tipoUsuario)}
          title={titulo}
        />
        <CardContent className={classes.cardMargin}>
          <Typography variant="h5" component="h2">
            {titulo}
          </Typography>
          <CardActions>
            <Button size="large" color="primary">
              Learn More
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardUsers;
