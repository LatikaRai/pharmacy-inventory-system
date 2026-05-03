import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import FeatureSection from './pages/FeatureSection'
import AppLayout from './pages/AppLayout'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import BatchManagement from './pages/BatchManagement'
import AddStock from './pages/AddStock'
import Reports from './pages/Reports'
import Alerts from './pages/Alerts'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Navbar from './components/Navbar'
import InteractiveDemo from './pages/InteractiveDemo'
import Instructions from './pages/Instructions'

const ProtectedAppRoutes = () => {
  const isAuthenticated = localStorage.getItem("pharmAuth") === "true"

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route
        path='/features'
        element={
          <div className='min-h-screen bg-white'>
            <Navbar />
            <FeatureSection />
          </div>
        }
      />
      <Route
        path='/demo'
        element={
          <div className='min-h-screen bg-white'>
            <Navbar />
            <InteractiveDemo />
          </div>
        }
      />
      <Route
        path='/instructions'
        element={
          <div className='min-h-screen bg-white'>
            <Navbar />
            <Instructions />
          </div>
        }
      />
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      
      {/* App routes */}
      <Route path='/app' element={<ProtectedAppRoutes/>}>
        <Route element={<AppLayout/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='inventory' element={<Inventory/>}/>
          <Route path='batchmanagement' element={<BatchManagement/>}/>
          <Route path='addstock' element={<AddStock/>}/>
          <Route path='reports' element={<Reports/>}/>
          <Route path='alerts' element={<Alerts/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
