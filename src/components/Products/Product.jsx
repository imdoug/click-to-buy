import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@material-ui/core'

import useStyles from './styles'

const Product = ({product, onAddToCart}) => {
      const classes = useStyles()
  return (<>
      <Card className={classes.card}>
            <Box className={classes.mediaBox}>
                  <CardMedia style={{width: '80%'}} component="img" image={product.image.url} title={product.name}/>
            </Box>
            <Box className={classes.contentBox}>
                  <CardContent style={{width: '80%', margin: '0 auto'}}>
                        <div className={classes.cardContent}>
                              <Typography variant="body1" style={{fontWeight: 600}} gutterBottom>
                                    {product.name}
                              </Typography>
                        </div>
                        <div className={classes.cardContent}>
                              <Typography variant="h5" gutterBottom style={{fontWeight: 700, color: '#0371E2'}}>
                                    {product.price.formatted_with_symbol}
                              </Typography>
                        </div>
                  </CardContent>
                  <CardActions disableSpacing className={classes.cardActions}>
                        <Button className={classes.btn} onClick={()=>{onAddToCart(product.id, 1)}}>Add to Bag</Button>
                  </CardActions>
            </Box>
      </Card>
      </>  

  )
}

export default Product