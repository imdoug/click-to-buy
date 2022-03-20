import React, { useState, useEffect} from 'react'
import { commerce } from './lib/commerce.js'
import { Product, NavBar } from './components'

function App() {
  const [products, setProducts] = useState([])

  const fethProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }

  useEffect(()=>{
    fethProducts()
  }, [])

  console.log(products)
  return (
    <div>
      <NavBar />
      <Product />
    </div>
  );
}

export default App;
