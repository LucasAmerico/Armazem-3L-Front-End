import React from 'react';
import List from '@material-ui/core/List';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import ItemLista from '../listItem/listItem';
import ItemListaMotorista from '../list-Item-motorista';

interface Props {
  content: any;
  parent: string;
}
const Lista = ({ content, parent }: Props) => {
  const classes = useStyles();
  // eslint-disable-next-line no-nested-ternary
  return parent === 'produto' ? (
    <List component="nav" className={classes.root} aria-label="listagem">
      {content.map((item: { nome: string; id: number }) => (
        <ItemLista titulo={item.nome} id={item.id} key={item.id} />
      ))}
    </List>
  ) : parent === 'carga' ? (
    <List component="nav" className={classes.root} aria-label="listagem">
      {content.map((item: { endereco: string; id: number }) => (
        <ItemLista titulo={item.endereco} id={item.id} key={item.id} />
      ))}
    </List>
  ) : (
    <List component="nav" className={classes.root} aria-label="listagem">
      {content.length !== 0 ? (
        content.map((item: { endereco: string; id: number }) => (
          <ItemListaMotorista
            titulo={item.endereco}
            id={item.id}
            key={item.id}
          />
        ))
      ) : (
        <div className={classes.centrado}>
          <Typography variant="h5"> ...Sem cargas para visualizar </Typography>
        </div>
      )}
    </List>
  );
};

export default Lista;
