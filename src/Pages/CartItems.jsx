import React, { useEffect, useState } from 'react'

import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Store/apiSlice';

const CartItems = ({setquery,query}) => {
    // const [data,setdata]=useState([ ]);
    const dispatch=useDispatch();
    const {products}=useSelector((state)=>state.product)
//     useEffect(()=>{
//         fetch(" https://fakestoreapi.com/products").then((res)=>res.json()).then((data)=>{

//             const datass=data.filter((data)=>data.title.toLowerCase().includes(query.toLowerCase()))
// setdata(datass)
//         })
//     },[query])


useEffect(() => {
    dispatch(getProducts());
  
}, [query]);

const filterData=products.filter((datas)=>datas.title.toLowerCase().includes(query.toLowerCase()));
    // console.log(data)
  return (
 <>
 <div className=' flex-wrap items-center flex justify-center flex-row gap-10 py-14'>
{filterData.map((datas)=>{
    return(
        
<Cart data={datas} query={query}/>

    )
})}

</div>
 </>
  )
}

export default CartItems