import { makeStyles, Theme } from '@material-ui/core';

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
  },
  container: {
    minHeight: '70vh',
  },
  display: {
    display: 'flex',
  },
  cardOne: {
    marginRight: '.5rem',
  },
  cardTwo: {
    marginLeft: '.5rem',
  },
}));

export default useStyles;
