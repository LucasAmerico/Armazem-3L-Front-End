import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  modal__left: {
    backgroundColor: '#468DF8',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  modal__right: {
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  modal__subTitle: {
    display: 'inline-block',
    textAlign: 'center',
    padding: '20px 0',
    color: 'white',
    fontWeight: 500,
  },
  modal__text: {
    display: 'inline-block',
    width: '18rem',
    textAlign: 'center',
    paddingBottom: '3rem',
    color: 'white',
  },
  modal__button: {
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center',
  },
  modal__buttonColor: {
    backgroundColor: 'white',
  },
  modal__login: {
    display: 'flex',
  },
}));

export default useStyles;
