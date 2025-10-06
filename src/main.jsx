import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Skills, About, Home, Projects} from './index'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path = '' element = {<Home/>}/>
      <Route path = 'skills' element = {<Skills/>}/>
      <Route path = 'about' element = {<About/>}/>
      <Route path = 'projects' element = {<Projects/>} />
    </Route>

  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
