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
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: '#e5e5e5',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    outline: 0,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal__AddButton: {
    backgroundColor: '#03fc30',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: '#00c707',
    },
  },
  modal__title: {
    fontWeight: 550,
    fontSize: '2.0rem',
    paddingBottom: '2rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  modal__buttons: {
    paddingTop: '1.5rem',
  },
  modal__buttonsFlex: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  modal__buttonMargin: {
    marginRight: '.5rem',
  },
}));

export default useStyles;
