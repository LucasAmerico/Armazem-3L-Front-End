import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

interface Props {
  titulo: string;
}
const ItemLista = ({ titulo }: Props) => {
  return (
    <ListItem button>
      <ListItemText>
        <Typography variant="h5"> {titulo} </Typography>
      </ListItemText>
      <ListItemSecondaryAction>
        <Tooltip title={<Typography variant="subtitle1"> Delete </Typography>}>
          <IconButton edge="end" aria-label="delete">
            <DeleteForeverIcon fontSize="large" color="secondary" />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ItemLista;
