import React from 'react';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './styles';
import ItemLista from '../ItemLista/ItemLista';

const Lista = () => {
  const classes = useStyles();
  return (
    <Container
      maxWidth="lg"
      style={{ backgroundColor: '#DAD8D8', height: '100vh' }}
    >
      <Grid container spacing={5}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={8}>
            <Typography variant="h4"> Listagem de Cargas </Typography>
          </Grid>
          <Grid container item xs={4}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                size="small"
                className={classes.button}
              >
                <AddIcon fontSize="large" />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <List component="nav" className={classes.root} aria-label="contacts">
            <ItemLista titulo="Endereço da carga" />
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Lista;
