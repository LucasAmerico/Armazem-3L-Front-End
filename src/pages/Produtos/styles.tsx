import { makeStyles, Theme } from '@material-ui/core';

const drawerWidth = 240;
//    background: '#E5E5E5',
const useStyles = makeStyles((theme: Theme) => ({
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  contentDisplay: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    paddingBottom: '1rem',
    paddingTop: '1rem',
  },
  produtosDisplay: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
