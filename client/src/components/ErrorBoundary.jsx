import { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }
    
    static getDerivedStateFromError(err) {
        return {
            hasError: true,
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log("ErrorBoundary", error, errorInfo);

    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || <h1 style={{color: "red", padding: "17rem 0"}}>Something went wrong! Please try again later</h1>;
        }

        return this.props.children;
    }
}