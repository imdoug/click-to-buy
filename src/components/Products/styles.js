import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
      card: {
            display: 'flex',
            height: '230px',
            width: '400px',
            textAlign: 'center',
            borderRadius: 16,
            boxShadow: '0px 24px 50px rgba(0,0,0,.08)',
            backdropFilter: 'blur(4px)',
            [theme.breakpoints.down('sm')]: {
                  display: 'block',
                  maxWidth: '100%',
                  height: '550px',
                },
      },
      mediaBox:{
            width: '50%', 
            maxHeight: '230px', 
            objectFit: 'contain',
            display:'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                  width: '100%',
                  paddingTop: '26.25%'
                }
      },
      contentBox:{
            textAlign: 'center',
            width: '50%', 
            height: '230px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                  width: '100%',
                  paddingTop: '20%'
            }
      },
      cardContent:{
            display: 'flex',
            justifyContent: 'center',
            
      },
      cardActions: {
            display: 'flex',
            justifyContent: 'center',
      },
      btn:{
            borderRadius: 8,
            padding: '5px 20px',
            background: '#0371E2',
            '&:hover':{
                  background: 'rgba(3, 113, 226, 0.8)'
            }, 
            color: '#fff', 
            textTransform: 'none'
      },
})) 