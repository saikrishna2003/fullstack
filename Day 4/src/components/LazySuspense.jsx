import PropTypes from "prop-types"
import { Suspense } from "react"
import Loader from '../assets/images/loader.gif'
import ErrorBoundary from '../components/ErrorBoundary'
const LazySuspense = ({component: Component,...rest}) => {
  return (
    <ErrorBoundary>
    <Suspense fallback={<div className="flex justify-center items-center h-screen"><img src={Loader} alt='Loader'/></div>}>
      <Component {...rest}/>
    </Suspense>
  </ErrorBoundary>
  
    
  )
}

LazySuspense.propTypes = {
  component : PropTypes.element.isRequired
}
export default LazySuspense