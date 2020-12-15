import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  field__full: {
    width: '100%',
    paddingBottom: '1rem',
  },
  field__margin: {
    paddingRight: '2.2rem',
  },
  grid__padding: {
    paddingBottom: '3rem',
  },
}));

export default useStyles;
