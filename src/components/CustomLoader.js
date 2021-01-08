import React from 'react';
import Loader from 'react-loader-spinner';

const CustomLoader = () => {
  return(
    <div className="d-flex justify-content-center mt-5">
        <Loader type="ThreeDots" color="#ffb000" height={50} width={120}timeout={999999} />
    </div>
  );
}

export default CustomLoader;