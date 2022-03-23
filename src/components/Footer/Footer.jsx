import React from 'react'
import { Copyright } from '@material-ui/icons';

import useStyles from './styles'

const Footer = () => {
      const classes = useStyles()
  return (
    <div className={classes.footer}><Copyright style={{fontSize: 18}} /> 2022 Doug Moreira. All rights reserved.</div>
  )
}

export default Footer