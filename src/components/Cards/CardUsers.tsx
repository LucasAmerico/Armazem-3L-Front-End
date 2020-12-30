import React from 'react';
import Card from '@material-ui/core/Card';
import { useHistory } from 'react-router-dom';
import { CardActionArea, CardMedia, Typography } from '@material-ui/core';
import { useSetRecoilState } from 'recoil';
import imageEnum from '../../utils/enum/imageEnum';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';

interface Props {
  titulo: string;
  tipoUsuario: string;
  route: string;
}

const CardUsers = ({ titulo, tipoUsuario, route }: Props) => {
  const classes = useStyles({});
  const history = useHistory();
  const setCurrentUser = useSetRecoilState(GlobalStates.currentUser);
  const setLogin = useSetRecoilState(GlobalStates.login);

  const handleOnClick = () => {
    if (tipoUsuario === 'motorista') {
      setLogin(true);
    } else {
      setCurrentUser(tipoUsuario);
      localStorage.setItem('user', tipoUsuario);
      history.push(route);
    }
  };
  return (
    <Card
      className={classes.root}
      onClick={() => handleOnClick()}
      data-testid="card"
      aria-label="card"
    >
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
