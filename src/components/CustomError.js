import React from 'react';

const CustomError = (props) => {
  return(
    <div className="alert alert-danger customAlert mt-3" role="alert">
      <h4 className="alert-heading">Something goes wrong!</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel corrupti necessitatibus cumque! Iste sint perspiciatis dolores quis doloremque quod. Possimus modi rerum debitis sed quaerat dolore delectus nesciunt quod iusto!</p>
      <hr/>
      <p className="m-0">Error message:</p>
      <p className="mb-0 font-weight-bold">{props.error}</p>
    </div>
  );
}

export default CustomError;