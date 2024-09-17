import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from 'react-router-dom'

import { ThemeProvider } from './components/ThemeProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SignIn from './pages/SignIn.jsx'
import Error from './pages/Error.jsx'
import Profile from './pages/Profile.jsx'
import SignUp from './pages/SignUp.jsx'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
import Employees from './pages/Employees.jsx'
import Assets from './pages/Assets.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route path='/' element={<LandingPage></LandingPage>} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/dashboard' children>
          <Route
            path='/dashboard/employees'
            element={<Employees></Employees>}
          />
          <Route path='/dashboard/assets' element={<Assets></Assets>} />
          <Route index element={<Dashboard></Dashboard>} />
        </Route>
      </Route>

      <Route path='/login' element={<SignUp></SignUp>} />
      <Route path='*' element={<Error></Error>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {' '}
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
