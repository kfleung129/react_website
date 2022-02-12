import {useState} from 'react'
import { FaGithub } from 'react-icons/fa'
import NavBar from './NavigationBar'
import Clock from './Clock'
import Header from './Header'
import Social from './Social'
import Projects from './Projects'
import Contact from './Contact'
import Test from './Test'

const App = (props) =>{
  return(
    <>
      <NavBar time={1000}></NavBar>
      <Header time={1500}></Header>
      <Test></Test>
      <Projects time={2000}></Projects>
      <Social time={2500}></Social>
      <Contact time={3000}></Contact>
    </>
  )
}

export default App