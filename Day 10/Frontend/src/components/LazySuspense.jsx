import PropTypes from "prop-types";
import { Suspense } from "react";
import loader from "../assets/images/cake.gif";
import ErrorBoundary from "./ErrorBoundary";

const LazySuspense = ({ component: Component, ...rest }) => {
  return (  
    <ErrorBoundary>
      <Suspense fallback={<div className="flex justify-center items-center m-64"><img src={loader} alt='cake' /></div>}>
        <Component {...rest} />
      </Suspense>
    </ErrorBoundary>
  );
};

LazySuspense.propTypes = {
  component: PropTypes.element.isRequired,
};

export default LazySuspense;
