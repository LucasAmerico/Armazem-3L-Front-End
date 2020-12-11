import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import GlobalStates from '../../recoil/atom';
import useStyles from './styles';

const Header = (props: any) => {
  const classes = useStyles();
  // const [sideBarStateValue, ] = useRecoilValue(sideBarState);
  const [open, setOpen] = useRecoilState(GlobalStates.sideBarState);
  const [currentUser, setCurrentUser] = useRecoilState(
    GlobalStates.currentUser,
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleResetUser = () => {
    setCurrentUser('Olá, visitante!');
  };

  return (
    <AppBar
      position="static"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          data-testid="app-label"
          variant="h6"
          className={classes.grow}
          noWrap
          onClick={() => handleResetUser()}
        >
          <Link to="/" className={classes.link}>
            Armazenagem 3L
          </Link>
        </Typography>
        <Typography variant="h6" noWrap>
          {currentUser.charAt(0).toUpperCase() + currentUser.slice(1)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
