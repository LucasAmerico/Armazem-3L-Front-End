import React from 'react';
import List from '@material-ui/core/List';
import useStyles from './styles';
import ItemLista from '../listItem/listItem';

interface Props {
  titulo: string;
  conteudo: any;
}
const Lista = ({ titulo, conteudo }: Props) => {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.root} aria-label="listagem">
      {conteudo.map((item: { endereco: string; id: number }) => (
        <ItemLista titulo={item.endereco} key={item.id} />
      ))}
    </List>
  );
};

export default Lista;
