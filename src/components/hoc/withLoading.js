import React from 'react';
import CustomLoader from '../CustomLoader';

const withLoading = Comp => {
  return class extends React.Component {
    
    render() {
      const {isLoading} = this.props; 

      if(isLoading) {
        return <CustomLoader/>
      }
      return <Comp {...this.props}/>;
    }
  }
}

export default withLoading;