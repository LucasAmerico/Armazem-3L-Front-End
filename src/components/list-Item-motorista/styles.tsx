import { makeStyles, Theme } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import COLORS from '../../constants/COLORS';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: COLORS.white,
  },
  deleteButton: {
    color: COLORS.red,
  },
  RColor: {
    backgroundColor: COLORS.deep_red,
    '&:hover, &:focus': {
      backgroundColor: COLORS.deep_red,
    },
  },
  pColor: {
    backgroundColor: COLORS.green,
    '&:hover, &:focus': {
      backgroundColor: COLORS.green,
    },
    marginRight: '.2rem',
  },
  avatarColor: {
    color: `${theme.palette.getContrastText(deepPurple[500])} !important`,
    backgroundColor: `${deepPurple[500]} !important`,
  },
  pointer: {
    cursor: 'default',
  },
}));

export default useStyles;
