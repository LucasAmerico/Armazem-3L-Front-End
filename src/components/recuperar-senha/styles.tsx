import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: '2rem',
    outline: 0,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal__title: {
    fontWeight: 550,
    fontSize: '2.0rem',
    paddingBottom: '2rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#777',
    textAlign: 'center',
  },
  modal__buttons: {
    paddingTop: '1.5rem',
  },
  modal__buttonsFlex: {
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
  modal__buttonMargin: {
    marginRight: '.5rem',
  },
  modal__button: {
    color: 'white',
    backgroundColor: '#0061F3',
    '&:hover': {
      backgroundColor: '#2677f0',
    },
  },
  modal__noPaddings: {
    margin: '0',
  },
  modal__paddingFields: {
    paddingBottom: '2rem',
  },
  modal__fieldFull: {
    width: '100%',
  },
}));

export default useStyles;
