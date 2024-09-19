import React  from 'react'
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({query,setquery}) => {
 const data=useSelector((state)=>state.cart||[])

  return (
 <>
  <nav className=' flex flex-row md:justify-between justify-between items-center py-2  w-full h-22 bg-yellow-200 text-black md:px-20  px-2 cursor-pointer' >
  <Link to='/'><img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/fashion-logo-design.jpg" alt="photo" className='w-[40px] h-auto rounded-full' ></img></Link> 
    <div className='flex flex-row  justify-center md:gap-20 items-center gap-5'>

    
        <form className=' flex justify-between flex-row items-center  relative'>
        <input type="text" placeholder='search' className='md:px-8 px-2  w-[150px] md:w-full py-2 md:text-xl hover:outline-pink-800 rounded-lg shadow-lg' value={query} onChange={(e)=>setquery(e.target.value)}/><span className=' text-xl ml-2 absolute hidden md:block '><CiSearch /></span>
        </form>
     
        <Link to='/cart'><h1>Cart<sup>{data.length}</sup></h1></Link> 
    </div>
  </nav>
 </>
  )
}

export default Navbar