
import React, { useState } from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Added from './Pages/Added'
import { Provider } from 'react-redux'
import Store from './Store/store'



const App = () => {
  const [query,setquery]=useState("")
  return (
 <>
 <Provider store={Store}>
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<Home query={query} setquery={setquery}/>}></Route>

  <Route path='/cart'  element={<Added query={query} setquery={setquery} />}>
  </Route>
 </Routes>
 </BrowserRouter>
 </Provider>

 </>
  )
}

export default App



