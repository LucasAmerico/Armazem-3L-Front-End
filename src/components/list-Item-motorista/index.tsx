/* eslint-disable no-nested-ternary */
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { Chip } from '@material-ui/core';
import useStyles from './styles';
import GlobalStates from '../../recoil/atom';
import { IPropsItemLista } from '../../utils/interfaces';

const ItemListaMotorista = ({ titulo, id }: IPropsItemLista) => {
  const classes = useStyles();
  const [openDetalhe, setOpenDetalhe] = useRecoilState(
    GlobalStates.openDetalhe,
  );
  const tabAtivo = useRecoilValue(GlobalStates.tabAtivo);
  const setOpenDialogAccCarga = useSetRecoilState(
    GlobalStates.openDialogAccCarga,
  );
  const setOpenDialogRecCarga = useSetRecoilState(
    GlobalStates.openDialogRecCarga,
  );

  const handleClickDetalhe = (event: any) => {
    event.stopPropagation();
    setOpenDetalhe({ ...openDetalhe, open: true, id });
  };

  const handleClickAccCarga = (event: any) => {
    event.stopPropagation();
    setOpenDialogAccCarga({ ...openDetalhe, open: true, id });
  };

  const handleClickRecCarga = (event: any) => {
    event.stopPropagation();
    setOpenDialogRecCarga({ ...openDetalhe, open: true, id });
  };

  return (
    <ListItem button className={classes.root} onClick={handleClickDetalhe}>
      <ListItemText>
        <Typography variant="h5"> {titulo} </Typography>
      </ListItemText>
      <ListItemSecondaryAction>
        {tabAtivo.value === 0 ? (
          <div>
            <Tooltip
              title={<Typography variant="subtitle1"> Aceitar </Typography>}
            >
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={handleClickAccCarga}
              >
                <Chip
                  label="Aceitar"
                  clickable
                  color="primary"
                  onDelete={() => {}}
                  deleteIcon={<DoneIcon />}
                  className={classes.pColor}
                />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={<Typography variant="subtitle1"> Recusar </Typography>}
            >
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={handleClickRecCarga}
              >
                <Chip
                  label="Recusar"
                  color="primary"
                  clickable
                  onDelete={() => {}}
                  deleteIcon={<ClearIcon />}
                  className={classes.RColor}
                />
              </IconButton>
            </Tooltip>
          </div>
        ) : tabAtivo.value === 1 ? (
          <div>
            <Tooltip
              title={<Typography variant="subtitle1"> Aceita </Typography>}
            >
              <IconButton edge="end" aria-label="delete">
                <Chip
                  label="Aceitas"
                  color="primary"
                  onDelete={() => {}}
                  deleteIcon={<DoneAllIcon className={classes.pointer} />}
                />
              </IconButton>
            </Tooltip>
          </div>
        ) : (
          <Tooltip
            title={<Typography variant="subtitle1"> Recusada </Typography>}
          >
            <IconButton edge="end" aria-label="delete">
              <Chip
                label="Recusada"
                color="primary"
                onDelete={() => {}}
                deleteIcon={<NotInterestedIcon className={classes.pointer} />}
                className={classes.RColor}
              />
            </IconButton>
          </Tooltip>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ItemListaMotorista;
