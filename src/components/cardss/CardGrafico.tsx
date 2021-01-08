import { Card, CardContent, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Chart from '../chart/Chart';
import useStyles from './styles';

interface Props {
  color: string;
  qtdPendente: any;
  qtdAceitas: any;
  qtdRejeitada: any;
}
const CardGrafico = ({
  color,
  qtdPendente,
  qtdAceitas,
  qtdRejeitada,
}: Props) => {
  const [styleProps, setStyleProps] = useState({
    color: '#DAD8D8',
  });
  useEffect(() => {
    setStyleProps({ ...styleProps, color });
  }, []);
  const classes = useStyles(styleProps);
  return (
    <Card className={classes.root} data-testid="card">
      <CardContent className={classes.cardChartMargin}>
        <Typography>
          <Chart
            quantidadePendente={qtdPendente}
            quantidadeAceitas={qtdAceitas}
            quantidadeRejeitada={qtdRejeitada}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardGrafico;
