import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

<<<<<<< HEAD
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
=======
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Songs } from './components/Songs';
import { Movies } from './components/Movies';
import { Books } from './components/Books';
// Create the root element for React

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path='/aboutus' element={<Aboutus />} />
      <Route path='/consultation' element={<Consultation />} />
      <Route path='/surveycomponent' element={<SurveyComponent/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/' element={<Landing/>} />
      <Route path='/songs' element={<Songs/>} />
      <Route path='/books' element={<Books/>} />
      <Route path='/movies' element={<Movies/>} />
      {/* <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> */}
    </Route>
  )
>>>>>>> 0713d41 (lol)
)
