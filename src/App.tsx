import { useState } from 'react'

import './App.css'
import { Demo1, Nav, Menu, Body, Favorite, Items, Viewall, Category, Menucard, Collection, About, Choose, Reviews, Insta, Faq, Icons, Footer, Navba} from "./components/Demo1";
import Test from './components/Test';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
        <Demo1/>
        <Nav/>
        <Navba/>
        <Menu/>
        <Body/>
        <Favorite/>
        <Items/>
        <Viewall/>
        <Category/>
        <Menucard/>
        
        
        <Choose/>
        <Reviews/>
      
        <Faq/>
        <Icons/>
        <Footer/>
        <Test/>
        
      </div>
    </>
  )
}

export default App
