import React from 'react';
import List from '@material-ui/core/List';
import useStyles from './styles';
import ItemLista from '../listItem/listItem';

interface Props {
  titulo: string;
  conteudo: any;
  parent: string;
}
const Lista = ({ titulo, conteudo, parent }: Props) => {
  const classes = useStyles();
  return parent === 'produto' ? (
    <List component="nav" className={classes.root} aria-label="listagem">
      {conteudo.map((item: { nome: string; id: number }) => (
        <ItemLista titulo={item.nome} id={item.id} key={item.id} />
      ))}
    </List>
  ) : (
    <List component="nav" className={classes.root} aria-label="listagem">
      {conteudo.map((item: { endereco: string; id: number }) => (
        <ItemLista titulo={item.endereco} id={item.id} key={item.id} />
      ))}
    </List>
  );
};

export default Lista;
