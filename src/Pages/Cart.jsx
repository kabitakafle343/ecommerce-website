import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add } from '../Store/cartSlice';




const Cart = ({data}) => {
  const dispatch=useDispatch();
  const carts = useSelector((state) => state.cart || []);
  const isItemInCart = carts.some(item => item.id === data.id);
  return (
   <>
    <div className=' flex justify-center items-center px-5 py-2  w-[290px] h-auto flex-col gap-4  bg-orange-100 ' id={data.id}>
    <img src={data.image} alt="photo" className='object-cover w-[190px] h-auto aspect-square ' />
<h1 className='w-full'>{data.title.length>20?data.title.slice(0,20)+".....":data.title}</h1>
<h1>{data.price}</h1>
<button className='py-2 px-4 bg-blue-900 text-white' onClick={()=>dispatch(add(data))} disabled={isItemInCart}>Addtocart</button>
    </div>
   </>
  )
}

export default Cart