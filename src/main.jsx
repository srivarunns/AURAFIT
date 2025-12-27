import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.css'
import LandingPage from './proaura/LandingPage'
import OutfitForm from './proaura/OutfitForm'
import AuroRouter from './proaura/AuroRouter'
import About from './proaura/About'
import Contact from './proaura/Contact'
import OutfitOutput from './proaura/OutfitOutput'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  {/* <LandingPage/> */}
  {/* <OutfitForm/> */}
  {/* <About/> */}
  {/* <Contact/> */}
  {/* <OutfitOutput/> */}
  <AuroRouter/>
  </StrictMode>,
)
