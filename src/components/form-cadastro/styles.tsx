import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  field__full: {
    width: '100%',
    paddingBottom: '1rem',
  },
  title: {
    color: '#777',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '1.9rem',
  },
  field__margin: {
    paddingBottom: '2rem',
  },
  grid__padding: {
    padding: '2rem 2rem',
  },
  margin: {
    // margin: theme.spacing(1),
  },
  buttons__flex: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonColor: {
    color: 'white',
    backgroundColor: '#0061F3',
    '&:hover': {
      backgroundColor: '#2677f0',
    },
  },
  passwordField: {
    height: '3.7rem',
  },
}));

export default useStyles;
