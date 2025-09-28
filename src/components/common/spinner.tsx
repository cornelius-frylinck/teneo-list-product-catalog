import CircularProgress from '@mui/material/CircularProgress';
import { Paper } from '@mui/material';

const Spinner = () => {
  return (
    <Paper className='container' style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress size="10rem" />
    </Paper>
  );
}

export default Spinner;