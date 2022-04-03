import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography } from '@material-ui/core'

import playstation from '../../assets/playstation-5.png'
import xbox from '../../assets/xbox.png'
import switchLogo from '../../assets/nintendo.png'

import useStyles from './styles'

const Banner = ({products, onAddToCart}) => {
  const classes = useStyles()
  const items = [
      {
          name: "Playstation 5",
          subName: 'Play has no limits',
          description: "PS5 and PS5 Digital Edition deliver lightning-fast loading, and an all-new generation of incredible PlayStation games",
          price: '$499.90',
          img: playstation,
          itemIndex: 9
      },
      {
          name: "XBOX SERIES X",
          subName: 'The Fastest',
          description: "Get ready for faster load times, higher resolution, more stable frame rates, and better input latency on thousands",
          price: '$399.90',
          img: xbox,
          itemIndex: 10
      },
      {
        name: "Nintendo Switch ",
        subName: "OLED Model",
        description: "7-inch OLED screen, a wide adjustable stand, a dock with a wired LAN port, and 64 GB of internal storage",
        price: '$349.99',
        img : switchLogo,
        itemIndex: 11
    }
  ]
  const Item = (props) =>{
    return (
      <Paper className={classes.paper} >
        <Box className={classes.contentBox}>
          <Typography className={classes.textTitle} variant='h3'>{props.item.name}</Typography>
          <Typography className={classes.textTitle} variant='h3'>{props.item.subName}</Typography>
          <Typography className={classes.itemDescription}variant='body2'>{props.item.description}</Typography>
          <Typography className={classes.price}variant='h4'>{props.item.price}</Typography>
          <Button className={classes.btn} onClick={()=>{onAddToCart(products[props.item.itemIndex])}}>
              Add to Bag
          </Button>
        </Box>
        <Box className={classes.imageBox}>
          <img style={{width: '75%',}} src={props.item.img}></img>
        </Box>
      </Paper>
)
}

return (
  <div className={classes.carousel}>
      <Carousel >
              {
                  items.map( (item, i) => <Item key={i} item={item} /> )
              }
      </Carousel>
  </div>
);
}

export default Banner