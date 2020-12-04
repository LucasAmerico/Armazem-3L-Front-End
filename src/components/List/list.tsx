import React from 'react';
import List from '@material-ui/core/List';
import useStyles from './styles';
import ItemLista from '../listItem/listItem';

interface Props {
  content: any;
  onAction: any;
}
const Lista = ({ content, onAction }: Props) => {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.root} aria-label="listagem">
      {content.map((item: { endereco: string; id: number }) => (
        <ItemLista
          title={item.endereco}
          key={item.id}
          action={() => onAction(item.id)}
        />
      ))}
    </List>
  );
};

export default Lista;
