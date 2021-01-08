import { makeStyles, Theme } from '@material-ui/core';
import COLORS from '../../constants/COLORS';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: COLORS.white,
  },
  centrado: {
    textAlign: 'center',
    color: '#262626',
  },
}));

export default useStyles;
