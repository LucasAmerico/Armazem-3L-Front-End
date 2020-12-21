import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import { Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import {
  Button,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { useRecoilState } from 'recoil';
import useStyles from './styles';
import imageEnum from '../../utils/enum/imageEnum';
import GlobalStates from '../../recoil/atom';

interface Props {
  titulo: string;
  tipoUsuario: string;
  route: string;
}

const CardUsers = ({ titulo, tipoUsuario, route }: Props) => {
  const classes = useStyles({});
  const history = useHistory();
  const [currentUser, setCurrentUser] = useRecoilState(
    GlobalStates.currentUser,
  );

  const handleOnClick = () => {
    setCurrentUser(tipoUsuario);
    history.push(route);
  };
  return (
    <Card className={classes.root} onClick={() => handleOnClick()}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="90"
          title={titulo}
          image={imageEnum(tipoUsuario)}
        />
        <Typography variant="h5" component="h5" align="center">
          {titulo}
        </Typography>
      </CardActionArea>
    </Card>
  );
};
export default CardUsers;
