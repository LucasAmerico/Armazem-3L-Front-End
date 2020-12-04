import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    minHeight: '30.145rem',
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
    padding: '1.1rem',
  },
  paper__font: {
    fontSize: '1.6rem',
  },
  paper__flex: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  paper__flex2: {
    display: 'flex',
    alignItems: 'center',
  },
  paper__padding: {
    paddingBottom: '2.2rem',
  },
  paper__inlineSpace: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  paper__a: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'inline',
    margin: 0,
    padding: 0,
    outline: 'none',

    '&:hover, :focus': {
      textDecoration: 'none',
      outline: 'none',
    },
  },
  paper__listProducts: {
    height: '18.147rem',
    overflow: 'auto',
  },
  paper__listInputs: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  paper__inputNumber: {
    width: '5rem',
    marginRight: '1rem',
  },
  paper__divider: {
    marginBottom: '.5rem',
  },
}));

export default useStyles;
