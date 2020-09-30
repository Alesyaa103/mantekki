import React, {Component} from 'react';
import ErrorIndicator from '../ErrorIndicator';

export default class ErrorBoundary extends Component {
  state ={
    error: null
  }
  componentDidCatch(error) {
    this.setState({error})
  }

  render() {
    if ( this.state.error) {
      return <ErrorIndicator error={this.state.error}/>
    }
    return this.props.children;
  }
}
