import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: (props: any) => ({
    width: '20rem',
    height: '10rem',
    backgroundColor: props.color,
  }),
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
  cardMargin: {
    padding: '25px',
  },
  cardChartMargin: {
    marginTop: '-10px',
  },
});
export default useStyles;
