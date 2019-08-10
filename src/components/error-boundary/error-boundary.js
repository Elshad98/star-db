import React from 'react';
import ErrorIndicator from '../error-indicator';

import './error-boundary.css';

class ErrorBoundary extends React.Component{
    constructor(){
        super();

        this.state = {
            hasError: false
        };
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        });
    }

    render(){
        if(this.state.hasError){
            return <ErrorIndicator />;
        }

        return this.props.children
    }
}

export default ErrorBoundary;