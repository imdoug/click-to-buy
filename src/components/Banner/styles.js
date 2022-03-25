import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
      carousel: {
            marginTop: '120px',
            width: '95%',
            margin: '0 auto',
            height: '400px',
            [theme.breakpoints.down('sm')]: {
                  marginTop: '140px',
                },
            [theme.breakpoints.down('xs')]: {
                  maxWidth: '83%',
                },
      },
      paper:{
            height: '350px', 
            display: 'flex', 
            background: '#F5F5F5', 
            borderRadius: '32px',
            [theme.breakpoints.down('xs')]: {
                  display: 'flexbox',
                  flexDirection: 'column-reverse',
                  height: 520,
                },


      },
      contentBox: {
            width: '45%', 
            padding: '20px', 
            marginLeft: '60px',
            [theme.breakpoints.down('sm')]: {
                  marginLeft: '40px'
            },
            [theme.breakpoints.down('xs')]: {
                  width: '90%',
                  textAlign: 'center',
                  marginLeft: '0px'
                },
      },
      imageBox: {
            width: '50%',
            display: 'flex', 
            justifyContent: 'start', 
            alignItems: 'center',
            [theme.breakpoints.down('xs')]: {
                  width: '100%',
                  justifyContent: 'center',
                },
      },
      textTitle: {
            fontWeight: '700',
            color: '#424241', 
            fontFamily: 'Play',
            [theme.breakpoints.down('sm')]: {
                  fontSize: '35px'
                },
            [theme.breakpoints.down('xs')]: {
                  fontSize: '24px'
                },
      },
      itemDescription: {
            fontSize: '20px',
            color: '#A7A7A7', 
            fontFamily: 'Play', 
            marginTop: '10px',
            [theme.breakpoints.down('xs')]: {
                  fontSize: '18px'
                },
      }
      ,price:{
            fontWeight: '900', 
            color: '#0371E2', 
            marginTop: '10px'
      },
      btn:{
            background: '#0371E2', 
            color: '#FFF',
            padding: '5px 20px', 
            marginTop: '10px'
      }
}))