import { makeStyles, Theme } from '@material-ui/core';
import COLORS from '../../constants/COLORS';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: '100%',
    color: COLORS.red,
  },
}));

export default useStyles;
