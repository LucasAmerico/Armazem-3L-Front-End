import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '20rem',
    height: '10rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export default useStyles;
