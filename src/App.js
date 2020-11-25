import React from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


async function sendInstructions(forward, backward, left, right, stop, setError)
{
    const response = await fetch("192.168.4.1/data/{forward:"+forward+","+"backward:"+backward+",left:"+left+",right"+right+",stop:"+stop+"}")
    if(response!=="OK"){
      setError(true)
    }
}

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h5" gutterBottom style={{marginBottom: "60px"}}>
          Mouse & Cheese
        </Typography>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <IconButton color="primary" aria-label="forward" component="span" onClick={() => sendInstructions(1,0,0,0,0,setOpen)}>
              <KeyboardArrowUpIcon />
            </IconButton>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
          >
            <Grid item xs={6}>
              <IconButton color="primary" aria-label="forward" component="span" onClick={() => sendInstructions(0,0,1,0,0,setOpen)}>
                <KeyboardArrowLeftIcon />
              </IconButton>
            </Grid>
            <Grid item xs={6}>
              <IconButton color="primary" aria-label="forward" component="span" onClick={() => sendInstructions(0,0,0,1,0,setOpen)}>
                <KeyboardArrowRightIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <IconButton color="primary" aria-label="forward" component="span" onClick={() => sendInstructions(0,1,0,0,0,setOpen)}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Grid>
        </Grid>
      </header>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="error">
          Error: please make sure to be connected to the mouse.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
