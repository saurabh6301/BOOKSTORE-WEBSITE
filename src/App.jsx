
import './App.css'
import Cotegorie from './components/Cotegorie/Cotegorie'
import Contact from './components/Contact/Contact'
import Homepage from './components/Homepage/Homepage'
import Navigation from './components/navigation/navigation'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import {  Route, Routes } from 'react-router-dom'
import Subbooks from './components/Cotegorie/SubBooks/Subbooks'
import { Subject } from './components/Cotegorie/Subject'
import Book from './components/Cotegorie/SubBooks/Book/Book'
import { SubFilter } from './components/Cotegorie/SubBooks/Bookdata/SubFilter'
import { BookList } from './components/Cotegorie/SubBooks/Book/BookList'

function App({filteredBooks}) {
  
  return (
    <div className="mx-10 my-2">
      <Navigation></Navigation>
      
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Cotegorie/*' element={<Cotegorie/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
     
        
      </Routes>
      <Footer></Footer>
    </div>
    
  )
}

export default App
