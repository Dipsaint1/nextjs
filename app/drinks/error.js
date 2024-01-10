'use client';

const error = ({ error : { message }, reset }) => {
  return (
    <div>{ message }</div>
  );
}

export default error;