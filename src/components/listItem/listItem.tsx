import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useRecoilState } from 'recoil';
import useStyles from './styles';
import GlobalStates from '../../recoil/atom';
import { IPropsItemLista } from '../../utils/interfaces';

const ItemLista = ({ titulo, id }: IPropsItemLista) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useRecoilState(GlobalStates.openDialog);
  const [openDetalhe, setOpenDetalhe] = useRecoilState(
    GlobalStates.openDetalhe,
  );

  const handleClickDelete = (event: any) => {
    event.stopPropagation();
    setOpenDialog({ ...openDialog, open: true, id });
  };

  const handleClickDetalhe = (event: any) => {
    event.stopPropagation();
    setOpenDetalhe({ ...openDetalhe, open: true, id });
  };

  return (
    <ListItem button className={classes.root} onClick={handleClickDetalhe}>
      <ListItemText>
        <Typography variant="h5"> {titulo} </Typography>
      </ListItemText>
      <ListItemSecondaryAction>
        <Tooltip title={<Typography variant="subtitle1"> Delete </Typography>}>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={handleClickDelete}
          >
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
