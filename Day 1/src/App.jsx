import { Navigate, Routes,Route } from "react-router-dom"
import { lazy } from "react"
import LazySuspense from "./components/LazySuspense"
const LazyLogin = lazy(() => import("./pages/auth/Login"))
const LazyRegister = lazy (() => import("./pages/auth/Register"))
const LazyForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"))

function App() { 
  return (
  
    <Routes>
      
      <Route exact path="/" element={<Navigate to="/birthdaybash/login"/>}/>
      <Route path="/birthdaybash/login" element={<LazySuspense component={LazyLogin}/>}/>
      <Route path="/birthdaybash/register" element = {<LazySuspense component={LazyRegister}/>}/>
      <Route path="/birthdaybash/forgot-password" element = {<LazySuspense component={LazyForgotPassword}/>}/>
      <Route path="/birthdaybash/user/*" element={<LazySuspense component={UserRoutes}/>}/>
      <Route path="/birthdaybash/admin/*" element={<LazySuspense component={AdminRoutes}/>}/>
      
    </Routes>
    
  )
}

export default App