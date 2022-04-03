import { makeStyles, alpha } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    fontFamily: 'Play',
    fontWeight: 700,
    fontSize: '40px',
    color: '#0371E2',
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  navOptions: {
    fontFamily: 'Poppins',
    color: '#AAAAAA',
    marginRight: 20,
    textDecoration: 'none'
  },
  findMe: {
    display: 'flex',
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  socialIcons: {
    display: 'flex',
    width: '50%',
    marginLeft: 40,
    color: '#AAAAAA',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center',
      justifyContent: 'center',
      marginLeft: 0,
    },
  },
  contactInfo: {
    display: 'flex',
    width: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 40,
    color: '#AAAAAA',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center',
      marginRight: 0,
      justifyContent: 'center',
      marginTop: 10
    },
  },
}));