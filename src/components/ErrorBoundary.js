import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        console.log("Get derived error fired");
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log("Component did catch error fired");
    }

    render() {
        if (this.state.hasError) {
            return <div>Something went wrong!</div>
        }
        return this.props.children
    }
}

export default ErrorBoundary;