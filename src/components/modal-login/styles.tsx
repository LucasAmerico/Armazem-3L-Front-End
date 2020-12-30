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
  modal__left: {
    backgroundColor: '#468DF8',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
  },
  modal__right: {
    backgroundColor: '#FFF',
    width: '100%',
  },
  modal__subTitle: {
    textAlign: 'center',
    padding: '20px 0',
    color: '#777',
    fontWeight: 500,
  },
  modal__form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 2rem',
  },
  modal__input: {
    '&:not(:last-child)': {
      marginBottom: '2.1rem',
    },
  },
  modal__text: {
    display: 'inline-block',
    width: '18rem',
    textAlign: 'center',
    paddingBottom: '3rem',
    color: '#777',
  },
  modal__button: {
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center',
  },
  modal__buttonColor: {
    color: 'white',
    backgroundColor: '#0061F3',
    '&:hover': {
      backgroundColor: '#2677f0',
    },
  },
  modal__login: {
    display: 'flex',
  },
}));

export default useStyles;
