import { Navigate, Routes,Route } from "react-router-dom"
import { lazy } from "react"
import LazySuspense from "./components/LazySuspense"
const LazyLogin = lazy(() => import("./pages/auth/Login"))
const LazyRegister = lazy (() => import("./pages/auth/Register"))
const LazyForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"))
const LazyUserMain = lazy(() => import("./pages/user/Main"))
const LazyHome = lazy(() => import("./pages/user/Home") ) 
const LazyTerms = lazy(() => import("./pages/user/Terms") ) 
const LazyPrivacy = lazy(() => import("./pages/user/Privacy"))
const LazyFaq = lazy(() => import("./pages/user/Faq") ) 
const LazyGallery = lazy(() => import("./pages/user/Gallery") ) 
const LazyAdminMain = lazy(() => import("./pages/admin/Main"))
const LazyDashBoard = lazy(() => import("./pages/admin/Dashboard"))
const LazyCities = lazy(() => import("./pages/admin/Cities"))
const LazyAboutUs = lazy(() => import("./pages/user/AboutUs"))
const LazyContactUs= lazy(() => import("./pages/user/ContactUs"))
const LazyThemes= lazy(() => import("./pages/admin/Themes"))



const AdminRoutes = () => {
  return(
    <LazyAdminMain>
      <Routes>
        <Route path="/dashboard" element={<LazySuspense component={LazyDashBoard}/>}></Route>
        <Route path="/cities" element={<LazySuspense component={LazyCities}/>}></Route>
        <Route path="/themes" element={<LazySuspense component={LazyThemes}/>}></Route>
      </Routes>
    </LazyAdminMain>
   

  )
}
const UserRoutes = () => {
  return(
    <LazyUserMain>
      <Routes>
        <Route path="/home" element={<LazySuspense component = {LazyHome}/>}/>
        <Route path="/faq" element = {<LazySuspense component={LazyFaq}/>}/>
        <Route path="/aboutus" element = {<LazySuspense component={LazyAboutUs}/>}/>
        <Route path="/terms" element = {<LazySuspense component={LazyTerms}/>}/>
        <Route path="/contactus" element = {<LazySuspense component={LazyContactUs}/>}/>
        <Route path="/gallery" element = {<LazySuspense component={LazyGallery}/>}/>
        <Route path="/pp" element = {<LazySuspense component={LazyPrivacy}/>}/>
      
      </Routes>
    </LazyUserMain>
  )
}

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