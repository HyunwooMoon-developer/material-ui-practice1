import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//https://mui.com/
function Header() {
  return (
    <header>
      <h1>Welcome</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
      </ol>
    </nav>
  );
}

function Article() {
  const [open, setOpen] = useState(false);
  return (
    <article>
      <h2>Welcome</h2>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
      <br />
      <ButtonGroup>
        <Button
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Create
        </Button>
        <Button variant="outlined">UPDATE</Button>
      </ButtonGroup>
      <Button variant="outlined">DELETE</Button>
      <Dialog open={open}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>Hello!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined">Create</Button>
          <Button
            variant="outlined"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </article>
  );
}

const App = () => {
  return (
    <Container fixed>
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <Nav />
        </Grid>
        <Grid item xs={10}>
          <Article />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
