import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from './styles';

interface Props {
  content: any;
  onAction: any;
}
const Lista = ({ content, onAction }: Props) => {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.root} aria-label="listagem">
      {content.map((item: { endereco: string; id: any }) => (
        <ListItem button>
          <ListItemText>
            <Typography variant="h5"> {item.endereco} </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Tooltip
              title={<Typography variant="subtitle1"> Delete </Typography>}
            >
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => onAction(item.id)}
              >
                <DeleteForeverIcon
                  fontSize="large"
                  className={classes.deleteButton}
                />
              </IconButton>
            </Tooltip>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default Lista;
