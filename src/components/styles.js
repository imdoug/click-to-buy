import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    padding: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
        paddingTop: '170px'   
    }
  },
  root: {
    flexGrow: 1,
  },
}));