import React from 'react'

type Props = {
    message: string | undefined
}

const ErrorBox = (props: Props) => {
  const {message} = props;
  return (
    <div className="alert alert-danger" role="alert">{message}</div>
  )
}

export default ErrorBox;