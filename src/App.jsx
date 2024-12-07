
import './App.css'
import Cotegorie from './components/Cotegorie/Cotegorie'
import Contact from './components/Contact/Contact'
import Homepage from './components/Homepage/Homepage'
import Navigation from './components/navigation/Navigation'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import {  Route, Routes, useLocation } from 'react-router-dom'
import Orderpage from './components/Order/Orderpage'
import Register from './components/User/Register'
import { Login, Logout } from '@mui/icons-material'
import UsersAndOrdersList from './components/Order/UsersAndOrdersList'
import ResponsiveNavbar from './components/navigation/ResponsiveNavbar'
import LoginPage from './components/User/LoginPage'
import AddBook from './components/Cotegorie/SubBooks/AddBook'



function App() {
 
  return (
    <div className="mx-10 my-2">
      <Navigation></Navigation>
      <ResponsiveNavbar></ResponsiveNavbar>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Login' element={<LoginPage/>} />
        <Route path='/Cotegorie/*' element={<Cotegorie />} />
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      
      <Route path='/Orderpage' element={<Orderpage/>}/>
  
       <Route path='/Register' element={<Register/>}/>
       <Route path='/Logout' element={<Logout/>}/>
       <Route path='/Users' element={<UsersAndOrdersList/>}/>



      </Routes>
      
      <Footer></Footer>
    </div>
    
  )
}

export default App;