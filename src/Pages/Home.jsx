import React from 'react'
import Navbar from '../Components/Navbar'
import CartItems from './cartItems'

const Home = ({query,setquery}) => {
  return (
<>
    <Navbar setquery={setquery} query={query}/>
    <CartItems  setquery={setquery} query={query}/>
</>
  )
}

export default Home