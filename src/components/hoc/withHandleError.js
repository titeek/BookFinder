import React from 'react';
import CustomError from '../CustomError';

const withHandleError = Comp => {
  return class extends React.Component {
    
    render() {
      const {error} = this.props; 

      if(error) {
        return <CustomError error={error}/>
      }
      return <Comp {...this.props}/>;
    }
  }
}

export default withHandleError;