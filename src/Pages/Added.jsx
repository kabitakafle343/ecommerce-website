import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/cartSlice';
import Navbar from '../Components/Navbar';

const Added = ({query,setquery}) => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.cart) ;
  const handleDelete=(id)=>{
    dispatch(remove(id))
   
  
  }
  const  filterCart=data.filter((datas)=>datas.title.toLowerCase().includes(query.toLowerCase()))
   return (
   <>
   
<Navbar  query={query} setquery={setquery} />

    <div className='flex justify-center items-center  bg-sky-600 text-black flex-wrap flex-row w-full gap-20 py-9 '>

    { filterCart.map((datas)=>{
      return(
        <div className='flex flex-col gap-4 justify-center items-center w-[210px] h-auto bg-slate-600 text-white p-8' key={datas.id}>
<img src={datas.image} alt='photo' />
<p>{datas.title}</p>
<h1>{datas.price}</h1>
<button onClick={()=>handleDelete(datas.id)} className=' px-4 py-2 rounded-lg shadow-xl bg-red-800'>Delete</button>
    </div>
      )
    })}
 
  

    </div>
   </>
  )
}

export default Added