import { Card, CardContent } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import useStyles from './styles';

interface Props {
  color: string;
  qtdPendente: any;
  qtdAceitas: any;
}
const CardGrafico = ({ color, qtdPendente, qtdAceitas }: Props) => {
  const [styleProps, setStyleProps] = useState({
    color: '#DAD8D8',
  });
  useEffect(() => {
    setStyleProps({ ...styleProps, color });
  }, []);
  const classes = useStyles(styleProps);
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardChartMargin}>
        <Chart
          quantidadePendente={qtdPendente}
          quantidadeAceitas={qtdAceitas}
        />
      </CardContent>
    </Card>
  );
};

export default CardGrafico;
