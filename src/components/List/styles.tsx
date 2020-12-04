import { makeStyles, Theme } from '@material-ui/core';
import COLORS from '../../constants/COLORS';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: COLORS.white,
  },
}));

export default useStyles;