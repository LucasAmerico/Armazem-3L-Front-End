import React from 'react';
import clsx from 'clsx';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useTheme } from '@material-ui/core/styles';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';
import usuarioEnum from '../../utils/enum/usuarioEnum';

const SideBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useRecoilState(GlobalStates.sideBarState);
  const [currentUser] = useRecoilState(GlobalStates.currentUser);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List data-testid="sidebar-list">
        {/* {['Cargas', 'Produtos', 'Motoristas'].map((text, index) => (
        ))} */}
        <ListItem
          button
          component={Link}
          to="/cargas"
          className={clsx(classes.list, {
            [classes.hide]: currentUser === usuarioEnum.MOTORISTA,
          })}
        >
          <ListItemIcon>
            <LocalShippingIcon />
          </ListItemIcon>
          <ListItemText primary="Cargas" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/produtos"
          className={clsx(classes.list, {
            [classes.hide]: currentUser === usuarioEnum.MOTORISTA,
          })}
        >
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText primary="Produtos" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/motoristas"
          className={clsx(classes.list, {
            [classes.hide]: currentUser === usuarioEnum.ADMINISTRATIVO,
          })}
        >
          <ListItemIcon>
            <LocalShippingIcon />
          </ListItemIcon>
          <ListItemText primary="Frete" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
