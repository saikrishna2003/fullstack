import React, { Component } from "react";
import PropTypes from 'prop-types';
import so from "../assets/images/error 404.gif"

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error){
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex justify-center m-64">
                    <img src={so} alt="404 Image" className="max-w-full h-full max-h-[600px]" />
                </div>
            );
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
};