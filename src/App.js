import {useState} from 'react'
import { FaGithub } from 'react-icons/fa'
import NavBar from './NavigationBar'
import Clock from './Clock'
import Header from './Header'
import Social from './Social'
import Projects from './Projects'

const App = (props) =>{
  return(
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Projects></Projects>
      <Social></Social>
    </>
  )
}

export default App