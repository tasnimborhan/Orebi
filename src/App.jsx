
import './App.css'
import { Routes,Route } from 'react-router-dom'
import RootLayout from './Components/layouts/RootLayout'
import Home from './Components/layouts/pages/Home'
import About from './Components/layouts/pages/About'
import Error from './Components/layouts/pages/Error'

function App() {
 

  return (
   <>
   <Routes>
    <Route path="/" element={<RootLayout/>}>
     <Route index element={<Home/>}/>
     <Route path="About" element={<About/>}/>
     <Route path="*" element={<Error/>}/>
    </Route>
   </Routes>
   </>
  )
}

export default App
