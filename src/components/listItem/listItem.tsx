import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from './styles';

interface Props {
  titulo: string;
}
const ItemLista = ({ titulo }: Props) => {
  const classes = useStyles();

  return (
    <ListItem button className={classes.root}>
      <ListItemText>
        <Typography variant="h5"> {titulo} </Typography>
      </ListItemText>
      <ListItemSecondaryAction>
        <Tooltip title={<Typography variant="subtitle1"> Delete </Typography>}>
          <IconButton edge="end" aria-label="delete">
            <DeleteForeverIcon
              fontSize="large"
              className={classes.deleteButton}
            />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ItemLista;