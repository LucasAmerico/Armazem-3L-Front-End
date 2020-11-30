import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    flexGrow: 1,
    background: '#E5E5E5',
  },
  rootGridTop: {
    background: '#8257E5',
  },
  espGridTop: {
    paddingTop: '120px',
    paddingBottom: '120px',
  },
  rootGridBotton: {
    background: '#E5E5E5',
  },
  divProfySpace: {
    paddingRight: '15px',
  },
  divIlustraSpace: {
    paddingLeft: '15px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  flexGrid: {
    display: 'flex',
  },
  textUnderProfy: {
    fontFamily: 'Poppins',
    fontSize: 36,
    marginTop: '0',
    color: '#D4C2FF',
    lineHeight: '46px',
  },
  textWelcome: {
    fontFamily: 'Poppins',
    fontSize: 20,
    marginTop: '0',
    color: '#6A6180',
    lineHeight: '5px',
  },
  textMine: {
    fontFamily: 'Poppins',
    fontSize: 12,
    marginTop: '0',
    color: '#6A6180',
    lineHeight: '10px',
    paddingLeft: '50px',
  },
  firstButton: {
    fontFamily: 'Poppins',
    fontSize: 24,
    color: 'white',
    fontWeight: 600,
    height: '104px',
    width: '282px',
    background: '#8257E5',
    '&:hover': {
      background: '#9390EE',
    },
  },
  secondButton: {
    fontFamily: 'Poppins',
    fontSize: 24,
    color: 'white',
    fontWeight: 600,
    height: '104px',
    width: '282px',
    background: '#04D361',
    '&:hover': {
      background: '#35DD53',
    },
  },
  gridFirst: {
    paddingRight: '18px',
    paddingBottom: '25px',
  },
  gridSecond: {
    paddingLeft: '18px',
    paddingBottom: '25px',
  },
  gridFirstButton: {
    paddingRight: '8px',
  },
  gridSecondButton: {
    paddingLeft: '8px',
  },
  containerFooter: {
    paddingTop: '60px',
  },
  iconPadding: {
    paddingRight: '15px',
  },
}));

export default useStyles;
