'use client';

const error = ({ error : { message }, reset }) => {
  console.log(error)
  return (
    <div>{ message }</div>
  );
}

export default error;