import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  cartItem: {
    height: 470,
    width: 290,
    borderRadius: 16,
    boxShadow: '0px 24px 50px rgba(0,0,0,.08)',
    backdropFilter: 'blur(4px)',
  },
  media: {
    marginTop: 15,
    height: 300,
    width: 236,
    margin: '0 auto',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));