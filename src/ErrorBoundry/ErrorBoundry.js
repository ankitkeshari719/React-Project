import React, {Component} from 'react';

class ErrorBoundry extends Component {
    state = {
        hasError : false,
        errorMessage: ''
    }

    ComponentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }

    render(){
        if(this.state.hasError){
            return <h1>Somethings went wrong!</h1>
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundry;