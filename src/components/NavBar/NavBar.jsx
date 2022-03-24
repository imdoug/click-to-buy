import React from 'react'
import { AppBar, Toolbar, IconButton, Badge,  MenuItem, Menu, Typography, Link as MaterialLink, Button} from "@material-ui/core"
import { MailOutline, Phone, Instagram, LinkedIn, GitHub, Facebook, ShoppingCartOutlined, LocalMallOutlined } from '@material-ui/icons'
import { Link, useLocation} from 'react-router-dom'

import useStyles from './styles'

const NavBar = ({ totalItems } ) => {
      const classes = useStyles()
      const location = useLocation()

      const icon = {
            fontSize: 20, marginRight: 20, color: '#AAAAAA'
      }


  return (
      <> 
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                  <div className={classes.findMe}>
                        <div className={classes.socialIcons}>
                              <MaterialLink href='https://www.facebook.com/imthedoug' target="_blank"><Facebook style={icon}/></MaterialLink>
                              <MaterialLink href='https://www.instagram.com/i.mdoug/' target="_blank"><Instagram style={icon}/></MaterialLink>
                              <MaterialLink href="https://www.linkedin.com/in/imdoug/" target="_blank"><LinkedIn style={icon}/></MaterialLink>
                              <MaterialLink href="https://github.com/imdoug" target="_blank"><GitHub style={icon}/></MaterialLink>
                        </div>
                        <div className={classes.contactInfo}>
                              <Phone style={{fontSize: 16, color: '#2F80ED', marginRight: 10}}/>
                              <Typography variant='body2'>+1 (123)-456-7890 </Typography>
                              <MailOutline style={{fontSize: 16, marginLeft: 20,color: '#2F80ED', marginRight: 10}}/>
                              <Typography variant='body2'>contact@dougmoreira.me</Typography>
                        </div>
                  </div>
                  <Toolbar>
                        <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit'>
                              GameSpot
                        </Typography>
                        <div> </div>
                        <div className={classes.grow}></div>
                        {location.pathname === '/' && ( 
                        <div className={classes.button}>
                              <IconButton component={Link} to="/cart" arial-label="Show cart items" color="inherit">
                                    <Badge badgeContent={totalItems} color="secondary">
                                          <LocalMallOutlined/>
                                    </Badge>
                              </IconButton>
                        </div>
                        )}
                  </Toolbar>

            </AppBar>
       </>
  )
}

export default NavBar